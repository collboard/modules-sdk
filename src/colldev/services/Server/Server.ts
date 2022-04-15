import { Destroyable, IDestroyable } from 'destroyable';
import express, { Express } from 'express';
import { readFile } from 'fs';
import http from 'http';
import localtunnel from 'localtunnel';
import { join, relative } from 'path';
import { BehaviorSubject, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { Server as SocketIoServer } from 'socket.io';
import { promisify } from 'util';
import { forValueDefined } from 'waitasecond';
import { string_folder_relative_path, string_url } from '../../../../types';
import { IColldevDevelopOptions } from '../../commands/develop/IColldevDevelopOptions';
import { DEVELOP_TEMPORARY_PATH } from '../../config';
import { isFileExisting } from '../../utils/isFileExisting';
import { DevelopmentCompiler } from '../Compiler/DevelopmentCompiler';
import { compilerStatusToJson } from '../Compiler/utils/compilerStatusToJson';
import { IService } from '../IService';
import { IColldevSyncerSocket } from './IColldevSyncerSocket';
import { IServerStatus } from './IServerStatus';

/**
 * Internally using only collboardUrl, port and expose but it is usefull to present all the args in /status route
 */
interface IServerOptions extends IColldevDevelopOptions {
    workingDir: string_folder_relative_path;
}
export class Server extends Destroyable implements IService, IDestroyable {
    private expressApp: Express;
    private server: http.Server;
    private socket: SocketIoServer;
    private tunnel: localtunnel.Tunnel | null = null;

    constructor(private compiler: DevelopmentCompiler, private readonly options: IServerOptions) {
        super();
        this.init();
    }

    public async openCollboardUrl(): Promise<string_url> {
        const { collboardUrl } = this.options;

        let uriParams = '';
        if (collboardUrl !== 'https://dev.collboard.com') {
            uriParams = `?collboardUrl=${encodeURIComponent(collboardUrl)}`;
        }
        const redirectUrl = `${await this.colldevUrl()}/open-collboard${uriParams}`;

        return redirectUrl;
    }

    public async colldevUrl(): Promise<string_url> {
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
    readonly status: BehaviorSubject<IServerStatus> = new BehaviorSubject({
        isReady: false,
        errors: [],
        clients: {},
    });
    private serverStatusUpdate(updator: (serverStatusValue: IServerStatus) => void) {
        const serverStatusValue = { ...this.status.value };
        updator(serverStatusValue);

        serverStatusValue.isReady =
            Object.values(serverStatusValue.clients).filter(({ isReady }) => isReady).length >
            0 /* TODO: Configurable treshold */;

        serverStatusValue.errors = Object.values(serverStatusValue.clients).reduce(
            (errors, client) => [...errors, ...client.errors],
            [],
        );

        this.status.next(serverStatusValue);
    }

    private async init() {
        this.compiler.colldevUrl = /* not await*/ this.colldevUrl();

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
                server: this.status.value,
                compiler: compilerStatusToJson(this.compiler.status.value),
            });
        });

        /*
        Note: We cannot use simple static server, because we are dynamically replacing declareModuleCallback
        app.use('/assets', serveStatic(ASSETS_PATH, { index: false }));
        */

        this.expressApp.use('/develop/*', async (request, response) => {
            const fileUri = request.params[0];
            const filePath = join(DEVELOP_TEMPORARY_PATH, fileUri);

            if (/\.js$/.test(fileUri)) {
                let content = await promisify(readFile)(filePath, 'utf8');
                const { declareModuleCallback } = request.query;
                if (!declareModuleCallback) {
                    return response.status(400).send(`You need to pass GET param declareModuleCallback.`);
                }

                content = content.replace('window.declareModule', `window.${declareModuleCallback}`);

                return response.type('application/javascript').header('Access-Control-Allow-Origin','*').send(content);
            } else {
                if (await isFileExisting(filePath)) {
                    return response.sendFile(filePath);
                }

                // Note: [🥝] When running in dev mode, we are not emiting assets by webpack but just serving original files from source
                const fileUnemitedPath = join(process.cwd(), fileUri.split(this.compiler.uniqueFoldername).join(''));

                return response.header('Access-Control-Allow-Origin','*').sendFile(fileUnemitedPath);
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
                const { instanceId } = clientIdentification;

                // console.log(`Client ${instanceId} connected and identified`);

                this.serverStatusUpdate((serverStatusValue) => {
                    serverStatusValue.clients[instanceId] = {
                        version: -1,
                        // TODO: Maybe transfer theese in initial
                        isConnected: true,
                        isReady: false,
                        errors: [],
                        url: '' /* TODO: Better */,
                        boardId: null,
                        modules: {},
                    };
                });

                const subscription = this.compiler.status.pipe(debounce(() => interval(100))).subscribe({
                    next: async ({ mainBundlePath }) => {
                        if (mainBundlePath) {
                            // console.log(`Emmiting bundle for ${instanceId}`);
                            socketConnection.emit('bundle', {
                                bundleUrl:
                                    `${await this.colldevUrl()}/develop/` +
                                    relative(DEVELOP_TEMPORARY_PATH, mainBundlePath),
                            } as IColldevSyncerSocket.bundle);
                        }
                    },
                });

                socketConnection.on('clientStatus', (clientStatus: IColldevSyncerSocket.clientStatus) => {
                    this.serverStatusUpdate((serverStatusValue) => {
                        // Note: Compatibility with old Collboards
                        if ((clientStatus as any).ready) {
                            clientStatus.isReady = true;
                        }

                        serverStatusValue.clients[instanceId] = clientStatus;
                    });
                });

                socketConnection.on('disconnect', async () => {
                    subscription.unsubscribe();

                    this.serverStatusUpdate((serverStatusValue) => {
                        delete serverStatusValue.clients[instanceId];
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
