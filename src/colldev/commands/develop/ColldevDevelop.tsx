import commander from 'commander';
import { Destroyable } from 'destroyable';
import * as React from 'react';
import { combineLatest } from 'rxjs';
import { forEver, forImmediate } from 'waitasecond';
import { BrowserSpawner } from '../../services/BrowserSpawner/BrowserSpawner';
import { DevelopmentCompiler } from '../../services/Compiler/DevelopmentCompiler';
import { compilerStatusToJson } from '../../services/Compiler/utils/compilerStatusToJson';
import { Server } from '../../services/Server/Server';
import { joinErrors } from '../../utils/joinErrors';
import { ICommand } from '../ICommand';
import { IColldevDevelopOptions } from './IColldevDevelopOptions';
import { IColldevDevelopStatus } from './IColldevDevelopStatus';
import { OutputComponent } from './OutputComponent';

export class ColldevDevelop extends Destroyable implements ICommand<IColldevDevelopOptions, IColldevDevelopStatus> {
    private compiler: DevelopmentCompiler;
    private server: Server;
    private browserSpawner: BrowserSpawner;

    public init(program: commander.Command) {
        return (
            program
                .command('develop [path]', { isDefault: true })
                // TODO: browser
                .alias('start')
                .description(`Start developing collboard module. Runs compiler+dev server.`)
                // TODO: What is better collboard-url or collboard?
                .option('-c, --collboard-url <url>', `Url of development Collboard`, 'https://dev.collboard.com')
                .option(
                    '-o, --open <openMode>',
                    `` /* TODO: Use here spacetrim */ +
                        `"none" for just running colldev without opening the browser;\n` +
                        `"single" for wait some time if the Collboard connects to Colldev, if yes do nothing if no open new browser window with collboard;\n` +
                        `"multiple" new browser window for each Colldev running`,

                    'single',
                )
                .option(
                    '-b, --browser <browser>',
                    `` /* TODO: Use here spacetrim */ +
                        `Which browser use\n` +
                        `It can be "chrome", "firefox", "safari", "ie", "msie", "edge" or "msedge"` +
                        `Or executable path to the browser`,
                    'default',
                )
                .option(
                    '-h, --headless',
                    `` /* TODO: Use here spacetrim */ +
                        `Opens the browser in headless mode\n` +
                        `Note: This flag is especially usefull when testing` +
                        `Note: This flag has no effect with flag "--open none"`,
                    false,
                )
                // TODO: Browser -  chrome
                .option(
                    '-w, --wait <miliseconds>',
                    `` /* TODO: Use here spacetrim */ +
                        `How many miliseconds to wait to connection until opening new browser window with Collboard\n` +
                        `Note: It can be used only with flag "--open single"`,

                    '2500',
                )
                .option(
                    '-e, --exit',
                    `` /* TODO: Use here spacetrim */ +
                        `Exit the CLI after succesfully started with propper exit code\n` +
                        `Note: This flag is especially usefull when testing`,
                    false,
                )
                .option(
                    '-d, --disconnect',
                    `` /* TODO: Use here spacetrim */ +
                        `Exit the CLI when Collboard disconnects from Colldev.\n` +
                        `Note: It allows closing CLI by closing a browser`,
                    false,
                )
                .option(
                    '-p, --port <port>',
                    `On which port will be Colldev server running`,
                    // TODO: Maybe allow option with + suffix
                    '3000',
                )
                .option(
                    '-e, --expose',
                    `` /* TODO: Use here spacetrim */ +
                        // TODO: Create own localtunnel server on collboard server and allow to configure it
                        `Exposes colldev server through internet so you can test modules across devices\n` +
                        `Note: this option uses internally localtunnel utility`,
                    false,
                )
        );
    }

    public async run(path: string, options: IColldevDevelopOptions) {
        const { exit, output, disconnect } = options;

        if (!exit && output !== 'human') {
            throw new Error(
                `It makes no sense to use "--output ${output}" without --exit flag. Please change one or another.\n You have used ${JSON.stringify(
                    options,
                )}`,
            );
        }

        this.compiler = new DevelopmentCompiler({ workingDir: path || './' });
        this.server = new Server(this.compiler, { path, ...options });
        this.browserSpawner = new BrowserSpawner(this.server, options);

        const endScenarios: Array<Promise<void>> = [forEver()];

        if (exit) {
            // 📝 Ending when the command is finished [*] (and Colldev is running with flag --exit)
            endScenarios.push(
                new Promise((resolve, reject) => {
                    combineLatest([
                        this.compiler.compilerStatus,
                        this.server.serverStatus,
                        this.browserSpawner.browserSpawnerStatus,
                    ]).subscribe(async ([compilerStatus, serverStatus, browserSpawnerStatus]) => {
                        if (
                            /* 📝[*] Command is finished when: */
                            (compilerStatus.ready && serverStatus.ready) /* 📝 Compiler and server are ready OR */ ||
                            (compilerStatus.ready &&
                                compilerStatus.errors.length) /* 📝 OR There is error with compilation OR */ ||
                            browserSpawnerStatus.errors.length /* 📝 OR There is error with spawning of the browser */
                        ) {
                            await forImmediate();
                            const error = joinErrors(
                                ...compilerStatus.errors,
                                ...serverStatus.errors,
                                ...browserSpawnerStatus.errors,
                            );
                            if (error) {
                                reject(error);
                            } else {
                                resolve(undefined);
                            }
                        }
                    });
                }),
            );
        }

        if (disconnect) {
            // Note: Ending when last client disconnects from Colldev server (and Colldev is running with flag --disconnect)
            endScenarios.push(
                new Promise((resolve, reject) => {
                    let alreadyConnected = false;

                    // TODO: Await promises - avoid callback hell
                    this.server.serverStatus.subscribe(({ clients }) => {
                        if (Object.values(clients).length > 0) {
                            alreadyConnected = true;
                        } else if (alreadyConnected) {
                            reject(
                                new Error(
                                    `Stopping Colldev because Collboard has disconnected in combination with option --disconnect`,
                                ),
                            );
                        }
                    });
                }),
            );
        }

        // 📝 Ending always when there is problem with spawning of the browser
        endScenarios.push(
            new Promise((resolve, reject) => {
                this.browserSpawner.browserSpawnerStatus.subscribe(async (browserSpawnerStatus) => {
                    if (browserSpawnerStatus.errors.length) {
                        await forImmediate();
                        reject(joinErrors(...browserSpawnerStatus.errors));
                    }
                });
            }),
        );

        await Promise.race(endScenarios);
    }

    public render(/* Maybe also path*/ options: IColldevDevelopOptions) {
        return (
            <OutputComponent
                {...{
                    compiler: this.compiler,
                    server: this.server,
                    browserSpawner: this.browserSpawner,
                    options,
                }}
            />
        );
    }

    public status() {
        return {
            compiler: this.compiler && compilerStatusToJson(this.compiler.compilerStatus.value),
            server: this.server && this.server.serverStatus.value,
            browserSpawner: this.browserSpawner && this.browserSpawner.browserSpawnerStatus.value,
        };
    }

    public async destroy() {
        await super.destroy();
        await this.compiler.destroy();
        await this.server.destroy();
        await this.browserSpawner.destroy();
    }
}
