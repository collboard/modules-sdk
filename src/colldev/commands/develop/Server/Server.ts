import { Destroyable, IDestroyable } from 'destroyable';
import express, { Express } from 'express';
import { readFile } from 'fs';
import http from 'http';
import localtunnel from 'localtunnel';
import { join, relative } from 'path';
import { BehaviorSubject } from 'rxjs';
import { Server as SocketIoServer } from 'socket.io';
import { promisify } from 'util';
import { forValueDefined } from 'waitasecond';
import { ASSETS_PATH } from '../../../config';
import { Compiler } from '../Compiler/Compiler';
import { compilerStatusToJson } from '../Compiler/utils/compilerStatusToJson';
import { IColldevDevelopOptions } from '../IColldevDevelopOptions';
import { IColldevSyncerSocket } from './IColldevSyncerSocket';
import { IServerStatus } from './IServerStatus';

/**
 * Internally using only collboardUrl, port and expose but it is usefull to present all the args in /status route
 */
interface IServerOptions extends IColldevDevelopOptions {
    path: string;
}
export class Server extends Destroyable implements IDestroyable {
    private expressApp: Express;
    private server: http.Server;
    private socket: SocketIoServer;
    private tunnel: localtunnel.Tunnel | null = null;

    constructor(private compiler: Compiler, private readonly options: IServerOptions) {
        super();
        this.init();
    }

    public async openCollboardUrl() {
        const { collboardUrl } = this.options;

        let uriParams = '';
        if (collboardUrl !== 'https://dev.collboard.com') {
            uriParams = `?collboardUrl=${encodeURIComponent(collboardUrl)}`;
        }
        const redirectUrl = `${await this.colldevUrl()}/open-collboard${uriParams}`;

        return redirectUrl;
    }

    public async colldevUrl() {
        const { port, expose } = this.options;
        if (!expose) {
            return `http://localhost:${port}`;
        } else {
            const tunnel = await forValueDefined(() => this.tunnel);
            return tunnel.url;
        }
    }

    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly serverStatus: BehaviorSubject<IServerStatus> = new BehaviorSubject({
        ready: false,
        errors: [],
        clients: {},
    });
    private serverStatusUpdate(updator: (serverStatusValue: IServerStatus) => void) {
        const serverStatusValue = { ...this.serverStatus.value };
        updator(serverStatusValue);

        serverStatusValue.ready =
            Object.values(serverStatusValue.clients).filter(({ ready }) => ready).length >
            0 /* TODO: Configurable treshold */;

        serverStatusValue.errors = Object.values(serverStatusValue.clients).reduce(
            (errors, client) => [...errors, ...client.errors],
            [],
        );

        this.serverStatus.next(serverStatusValue);
    }

    private async init() {
        this.expressApp = express();
        const { port: portAsString, expose } = this.options;
        const port = parseInt(portAsString, 10);

        this.server = http.createServer(this.expressApp);
        this.socket = new SocketIoServer(this.server, { transports: ['websocket', 'polling'] });
        this.socketHandler();

        this.expressApp.get('/', async (request, response) => {
            // TODO: Put here a version
            response.type('text/html').send(`
            <h1>Colldev server</h1>
            <p>Hello from Collboard.com modules SDK toolkit:</p>
            <ul>
                <li>To test currently developed modules go to <a href="${await this.openCollboardUrl()}">${await this.openCollboardUrl()}</a>.</li>
                <li>To show current stats to <a href="/status">/status</a>.</li>
                <li>To learn more <a href="https://github.com/collboard/modules-sdk">https://github.com/collboard/modules-sdk</a>.</li>
            </ul>

            `);
        });

        this.expressApp.get('/open-collboard', (request, response) => {
            const collboardUrl = request.query.collboardUrl || 'https://dev.collboard.com';

            response.type('text/html').send(`
            <script>
                const redirectUrl = '${collboardUrl}?colldevUrl='+encodeURIComponent(window.location.toString().split('/open-collboard')[0]);
                document.write('Redirecting to <a href="'+redirectUrl+'">'+redirectUrl+'</a>.');
                window.location = redirectUrl;
            </script>

            `);
        });

        this.expressApp.get('/status', async (req, res) => {
            // TODO: Pretty print sended json
            res.type('application/javascript').send({
                // TODO: Add version
                links: {
                    colldevUrl: await this.colldevUrl(),
                    openCollboardUrl: await this.openCollboardUrl(),
                },
                args: this.options,
                // Note: logical order is compiler, server but compiler is a bit verbose so it is at bottom
                server: this.serverStatus.value,
                compiler: compilerStatusToJson(this.compiler.compilerStatus.value),
            });
        });

        /*
        Note: We cannot use simple static server, because we are dynamically replacing declareModuleCallback
        app.use('/assets', serveStatic(ASSETS_PATH, { index: false }));
        */

        this.expressApp.use('/assets/*', async (request, response) => {
            const fileUri = request.params[0];
            const filePath = join(ASSETS_PATH, fileUri);

            if (/\.js$/.test(fileUri)) {
                let content = await promisify(readFile)(filePath, 'utf8');
                const { declareModuleCallback } = request.query;
                if (!declareModuleCallback) {
                    return response.status(400).send(`You need to pass GET param declareModuleCallback.`);
                }

                content = content.replace('window.declareModule', `window.${declareModuleCallback}`);

                return response.type('application/javascript').send(content);
            } else {
                return response.sendFile(filePath);
            }
        });

        // TODO: Maybe nicer report of EADDRINUSE and unsafe ports ; this can be coimplemented with port+ option

        this.server.listen(port);

        if (expose) {
            this.tunnel = await localtunnel({ port });
        }
    }

    private async socketHandler() {
        this.socket.on('connection', (socketConnection) => {
            socketConnection.on('identify', (clientIdentification: IColldevSyncerSocket.identify) => {
                const { instanceUUID } = clientIdentification;

                // console.log(`Client ${instanceUUID} connected and identified`);

                this.serverStatusUpdate((serverStatusValue) => {
                    serverStatusValue.clients[instanceUUID] = {
                        version: -1,
                        // TODO: Maybe transfer theese in initial
                        connected: true,
                        ready: false,
                        errors: [],
                        url: '' /* TODO: Better */,
                        boardId: null,
                        modules: {},
                    };
                });

                const subscription = this.compiler.compilerStatus.subscribe({
                    next: async ({ bundle }) => {
                        if (bundle) {
                            // console.log(`Emmiting bundle for ${instanceUUID}`);
                            socketConnection.emit('bundle', {
                                bundleUrl: `${await this.colldevUrl()}/assets/` + relative(ASSETS_PATH, bundle.path),
                            } as IColldevSyncerSocket.bundle);
                        }
                    },
                });

                socketConnection.on('clientStatus', (clientStatus: IColldevSyncerSocket.clientStatus) => {
                    this.serverStatusUpdate((serverStatusValue) => {
                        serverStatusValue.clients[instanceUUID] = clientStatus;
                    });
                });

                socketConnection.on('disconnect', async () => {
                    subscription.unsubscribe();

                    this.serverStatusUpdate((serverStatusValue) => {
                        delete serverStatusValue.clients[instanceUUID];
                    });
                });
            });

            // TODO: Initial bundle socketConnection.emit('bundle', {} as IColldevSyncerSocket.bundle);
        });
    }

    public async destroy() {
        await super.destroy();
        this.server.close();
        this.socket.close();
        if (this.tunnel) {
            this.tunnel.close();
        }
        // TODO: Also destroy this.expressApp
    }
}
