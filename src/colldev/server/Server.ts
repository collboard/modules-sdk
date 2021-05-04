import express from 'express';
import { readFile } from 'fs';
import http from 'http';
import { join, relative } from 'path';
import { BehaviorSubject } from 'rxjs';
import { Server as SocketIoServer } from 'socket.io';
import { promisify } from 'util';
import { Compiler } from '../compiler/Compiler';
import { ASSETS_PATH } from '../config';
import { IColldevSyncerSocket } from './IColldevSyncerSocket';

// !!! Remove mobx + mobx-react

interface IServerStatus {
    clients: Record<string, IColldevSyncerSocket.clientStatus>;
}
export class Server {
    constructor(private compiler: Compiler) {
        this.init();
    }

    readonly serverStatus: BehaviorSubject<IServerStatus> = new BehaviorSubject({ clients: {} });
    private serverStatusUpdate(updator: (serverStatusValue: IServerStatus) => void) {
        const serverStatusValue = { ...this.serverStatus.value };
        updator(serverStatusValue);
        this.serverStatus.next(serverStatusValue);
    }

    private init() {
        const app = express();
        const port = 3000; // TODO: !!!! What is best port for dev server

        const server = http.createServer(app);
        const socket = new SocketIoServer(server, { transports: ['websocket', 'polling'] });
        this.socketHandler(socket);

        app.get('/', (req, res) => {
            // TODO: !!! show sth on 3000
            // TODO: !!! Allow to choose port
            // TODO: !!! Localtunneling
            res.type('text/html').send(`
            <h1>Colldev server</h1>
            <p>Hello from Collboard.com modules SDK toolkit:</p>
            <ul>
                <li>To test currently developed modules go to <a href="https://dev.collboard.com">https://dev.collboard.com</a>.</li>
                <li>To show current stats to <a href="/stats">/stats</a>.</li>
                <li>To learn more <a href="https://github.com/collboard/modules-sdk">https://github.com/collboard/modules-sdk</a>.</li>
            </ul>

            `);
        });

        app.get('/stats', (req, res) => {
            res.type('application/javascript').send({
                date: new Date().toISOString(),
                server: this.serverStatus.value,
                compiler: this.compiler.stats.value,
            });
        });

        /*
        Note: We cannot use simple static server, because we are dynamically replacing declareModuleCallback
        app.use('/assets', serveStatic(ASSETS_PATH, { index: false }));
        */

        app.use('/assets/*', async (request, response) => {
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

        server.listen(port, () => {
            // console.log(`Example app listening at http://localhost:${port}`);
        });
    }

    private async socketHandler(socket: SocketIoServer) {
        socket.on('connection', (socketConnection) => {
            socketConnection.on('identify', (clientIdentification: IColldevSyncerSocket.identify) => {
                const { instanceUUID } = clientIdentification;

                // TODO: !!! Cleanup theese console logs - only react ink interface
                // console.log(`Client ${instanceUUID} connected and identified`);

                this.serverStatusUpdate((serverStatusValue) => {
                    serverStatusValue.clients[instanceUUID] = { connected: true, modules: {} };
                });

                const subscription = this.compiler.bundles.subscribe({
                    next: ({ path }) => {
                        // console.log(`Emmiting bundle for ${instanceUUID}`);
                        socket.emit('bundle', {
                            bundleUrl: 'http://localhost:3000/assets/' + relative(ASSETS_PATH, path),
                        } as IColldevSyncerSocket.bundle);
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
                        serverStatusValue.clients[instanceUUID].connected = false;
                    });
                });
            });

            // TODO: Initial bundle socketConnection.emit('bundle', {} as IColldevSyncerSocket.bundle);
        });
    }
}
