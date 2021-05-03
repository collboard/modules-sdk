import express from 'express';
import { readFile } from 'fs';
import http from 'http';
import { join, relative } from 'path';
import { Server as SocketIoServer } from 'socket.io';
import { promisify } from 'util';
import { Compiler } from '../compiler/Compiler';
import { ASSETS_PATH } from '../config';
import { IColldevSyncerSocket } from './IColldevSyncerSocket';

export class Server {
    constructor(private compiler: Compiler) {
        this.init();
    }

    private init() {
        const app = express();
        const port = 3000; // TODO: !!!! What is best port for dev server

        const server = http.createServer(app);
        const socket = new SocketIoServer(server, { transports: ['websocket', 'polling'] });
        this.socketHandler(socket);

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        /*
        app.get('/bundles', (req, res) => {
            res.type('application/javascript').send(`console.log('Hello from colldev express');` + bundle);
        });*/

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
            console.log(`Example app listening at http://localhost:${port}`);
        });
    }

    private async socketHandler(socket: SocketIoServer) {
        socket.on('connection', (socketConnection) => {
            socketConnection.on('identify', (clientIdentification: IColldevSyncerSocket.identify) => {
                const { instanceUUID } = clientIdentification;
                console.log(`Client ${instanceUUID} connected and identified`);

                const subscription = this.compiler.bundles.subscribe({
                    next: ({ path }) => {
                        console.log(`Emmiting bundle for ${instanceUUID}`);
                        socket.emit('bundle', {
                            bundleUrl: 'http://localhost:3000/assets/' + relative(ASSETS_PATH, path),
                        } as IColldevSyncerSocket.bundle);
                    },
                });

                socketConnection.on('disconnect', async () => {
                    subscription.unsubscribe();
                });
            });

            // TODO: Initial bundle socketConnection.emit('bundle', {} as IColldevSyncerSocket.bundle);
        });
    }
}
