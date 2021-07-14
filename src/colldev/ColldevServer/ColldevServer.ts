import { Destroyable, IDestroyable } from 'destroyable';
import express, { Express } from 'express';
import { readFile } from 'fs';
import http from 'http';
import { join, relative } from 'path';
import { BehaviorSubject } from 'rxjs';
import { Server as SocketIoServer } from 'socket.io';
import { promisify } from 'util';
import { IColldevDevelopOptions } from '../Colldev/IColldevDevelopOptions';
import { Compiler } from '../Compiler/Compiler';
import { ASSETS_PATH } from '../config';
import { IColldevSyncerSocket } from './IColldevSyncerSocket';

interface IServerStatus {
    clients: Record<string, IColldevSyncerSocket.clientStatus>;
}

type IColldevServerOptions = Pick<IColldevDevelopOptions, 'collboardUrl'>;
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
        const redirectUrl = /* TODO: On exposed do not hardcode localhost */ `http://localhost:3000/open-collboard${uriParams}`;

        return redirectUrl;
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
        const port = 3000;

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
                window.location = '${collboardUrl}?colldevUrl='+encodeURIComponent(window.location.toString().split('/open-collboard').join(''));
            </script>

            `);
        });

        this.expressApp.get('/stats', (req, res) => {
            res.type('application/javascript').send({
                date: new Date().toISOString(),
                server: this.serverStatus.value,
                compiler: { ...this.compiler.statuses.value, stats: this.compiler.statuses.value.stats?.toJson() },
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

        this.server.listen(port, () => {
            // console.log(`Example app listening at http://localhost:${port}`);
        });
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
                                bundleUrl: 'http://localhost:3000/assets/' + relative(ASSETS_PATH, bundle.path),
                            } as IColldevSyncerSocket.bundle);
                        }
                    },
                });

                socketConnection.on('clientStatus', (clientStatus: IColldevSyncerSocket.clientStatus) => {
                    // console.log({ clientStatus });

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
        // TODO: Also destroy this.expressApp
    }
}
