import { Destroyable, IDestroyable } from 'destroyable';
import express, { Express } from 'express';
import { readFile } from 'fs';
import http from 'http';
import { join, relative } from 'path';
import { BehaviorSubject } from 'rxjs';
import { Server as SocketIoServer } from 'socket.io';
import { promisify } from 'util';
import { IColldevDevelopOptions } from '../Colldev/commands/develop/IColldevDevelopOptions';
import { Compiler } from '../Compiler/Compiler';
import { compilerStatusToJson } from '../Compiler/utils/compilerStatusToJson';
import { ASSETS_PATH } from '../config';
import { IColldevSyncerSocket } from './IColldevSyncerSocket';

interface IServerStatus {
    clients: Record<string, IColldevSyncerSocket.clientStatus>;
}

/**
 * Internally using only collboardUrl, port and expose but it is usefull to present all the args in /stats route
 */
interface IColldevServerOptions extends IColldevDevelopOptions {
    path: string;
}
export class ColldevServer extends Destroyable implements IDestroyable {
    constructor(private compiler: Compiler, private readonly options: IColldevServerOptions) {
        super();
        this.init();
    }

    public get openCollboardUrl() {
        const { collboardUrl } = this.options;

        let uriParams = '';
        if (collboardUrl !== 'https://dev.collboard.com') {
            uriParams = `?collboardUrl=${encodeURIComponent(collboardUrl)}`;
        }
        const redirectUrl = `${this.colldevUrl}/open-collboard${uriParams}`;

        return redirectUrl;
    }

    public get colldevUrl() {
        const { port, expose } = this.options;
        return /* TODO: On exposed do not hardcode localhost */ `http://localhost:${port}`;
    }

    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly serverStatus: BehaviorSubject<IServerStatus> = new BehaviorSubject({ clients: {} });
    private serverStatusUpdate(updator: (serverStatusValue: IServerStatus) => void) {
        const serverStatusValue = { ...this.serverStatus.value };
        updator(serverStatusValue);
        this.serverStatus.next(serverStatusValue);
    }

    private server: http.Server;
    private expressApp: Express;
    private socket: SocketIoServer;

    private init() {
        this.expressApp = express();
        const { port } = this.options;

        this.server = http.createServer(this.expressApp);
        this.socket = new SocketIoServer(this.server, { transports: ['websocket', 'polling'] });
        this.socketHandler();

        this.expressApp.get('/', (request, response) => {
            // TODO: Put here a version
            response.type('text/html').send(`
            <h1>Colldev server</h1>
            <p>Hello from Collboard.com modules SDK toolkit:</p>
            <ul>
                <li>To test currently developed modules go to <a href="${this.openCollboardUrl}">${this.openCollboardUrl}</a>.</li>
                <li>To show current stats to <a href="/stats">/stats</a>.</li>
                <li>To learn more <a href="https://github.com/collboard/modules-sdk">https://github.com/collboard/modules-sdk</a>.</li>
            </ul>

            `);
        });

        this.expressApp.get('/open-collboard', (request, response) => {
            const collboardUrl = request.query.collboardUrl || 'https://dev.collboard.com';

            response.type('text/html').send(`
            <script>
                var redirectUrl = '${collboardUrl}?colldevUrl='+encodeURIComponent(window.location.toString().split('/open-collboard')[0]);
                document.write('Redirecting to <a href="'+redirectUrl+'">'+redirectUrl+'</a>.');
                window.location = redirectUrl;
            </script>

            `);
        });

        this.expressApp.get('/stats', (req, res) => {
            // TODO: Pretty print sended json
            res.type('application/javascript').send({
                // TODO: Add version
                links: {
                    colldevUrl: this.colldevUrl,
                    openCollboardUrl: this.openCollboardUrl,
                },
                args: this.options,
                server: this.serverStatus.value,
                compiler: compilerStatusToJson(this.compiler.statuses.value),
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
    }

    private async socketHandler() {
        this.socket.on('connection', (socketConnection) => {
            socketConnection.on('identify', (clientIdentification: IColldevSyncerSocket.identify) => {
                const { instanceUUID } = clientIdentification;

                // console.log(`Client ${instanceUUID} connected and identified`);

                this.serverStatusUpdate((serverStatusValue) => {
                    serverStatusValue.clients[instanceUUID] = {
                        // TODO: Maybe transfer theese in initial
                        connected: true,
                        error: null,
                        url: '' /* TODO: Better */,
                        boardId: null,
                        modules: {},
                    };
                });

                const subscription = this.compiler.statuses.subscribe({
                    next: ({ bundle }) => {
                        if (bundle) {
                            // console.log(`Emmiting bundle for ${instanceUUID}`);
                            socketConnection.emit('bundle', {
                                bundleUrl: `${this.colldevUrl}/assets/` + relative(ASSETS_PATH, bundle.path),
                            } as IColldevSyncerSocket.bundle);
                        }
                    },
                });

                socketConnection.on('clientStatus', (clientStatus: IColldevSyncerSocket.clientStatus) => {
                    console.log({ clientStatus });

                    this.serverStatusUpdate((serverStatusValue) => {
                        serverStatusValue.clients[instanceUUID] = clientStatus;
                    });
                });

                socketConnection.on('disconnect', async () => {
                    subscription.unsubscribe();

                    this.serverStatusUpdate((serverStatusValue) => {
                        delete serverStatusValue.clients[instanceUUID];
                    });

                    if (this.options.disconnect && Object.values(this.serverStatus.value.clients).length === 0) {
                        /*
                        TODO: Report or not to report
                        console.info(
                            chalk.red(
                                'Stopping Colldev because Collboard has disconnected in combination with option --disconnect',
                            ),
                        );
                        */
                        process.exit(
                            1 /* Note: when the browser in closed in combination with testing it indicates some problem so we want to indicate here error exit code */,
                        );
                    }
                });
            });

            // TODO: Initial bundle socketConnection.emit('bundle', {} as IColldevSyncerSocket.bundle);
        });
    }

    public async destroy() {
        await super.destroy();
        this.server.close();
        this.socket.close();
        // TODO: Also destroy this.expressApp
    }
}
