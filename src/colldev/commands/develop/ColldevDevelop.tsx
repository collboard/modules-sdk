import commander from 'commander';
import { Destroyable } from 'destroyable';
import * as React from 'react';
import spaceTrim from 'spacetrim';
import { forEver, forImmediate } from 'waitasecond';
import { BrowserSpawner } from '../../services/BrowserSpawner/BrowserSpawner';
import { DevelopmentCompiler } from '../../services/Compiler/DevelopmentCompiler';
import { compilerStatusToJson } from '../../services/Compiler/utils/compilerStatusToJson';
import { Server } from '../../services/Server/Server';
import { forServicesReady } from '../../utils/forServicesReady';
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
                .description(`Start developing collboard module. Runs compiler+dev server`)
                // TODO: What is better collboard-url or collboard?
                .option('-c, --collboard-url <url>', `Url of development Collboard`, 'https://dev.collboard.com')
                .option(
                    '-o, --open <openMode>',
                    spaceTrim(`
                        Strategy for automatically opening the browser:
                            - "none" for just running colldev without opening the browser;
                            - "single" for wait some time if the Collboard connects to Colldev, if yes do nothing if no open new browser window with collboard;
                            - "multiple" new browser window for each Colldev running
                    `),
                    'single',
                )
                .option(
                    '-b, --browser <browser>',
                    spaceTrim(`
                        Which browser to open:
                            1) It can be "chrome", "firefox", "safari", "ie", "msie", "edge" or "msedge"
                            2) Or executable path to the browser

                            Note: For more options see https://github.com/hejny/locate-app
                    `),
                    'default',
                )
                .option(
                    '-h, --headless',
                    spaceTrim(`
                        Opens the browser in headless mode

                            Note: This flag is especially usefull when testing
                            Note: This flag has no effect with flag "--open none"
                    `),
                    false,
                )
                // TODO: Browser -  chrome
                .option(
                    '-w, --wait <miliseconds>',
                    spaceTrim(`
                        How many miliseconds to wait to connection until opening new browser window with Collboard

                            Note: It can be used only with flag "--open single"
                    `),
                    '2500',
                )
                .option(
                    '-e, --exit',
                    spaceTrim(`
                        Exit the CLI after succesfully started with propper exit code

                            Note: This flag is especially usefull when testing
                    `),
                    false,
                )
                .option(
                    '-d, --disconnect',
                    spaceTrim(`
                        Exit the CLI when Collboard disconnects from Colldev.

                            Note: It allows closing CLI by closing a browser
                    `),
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
                    // TODO: Create own localtunnel server on collboard server and allow to configure it
                    spaceTrim(`
                        Exposes colldev server through internet so you can test modules across devices

                            Note: this option uses internally localtunnel utility
                    `),
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
            // 📝 Ending when the command is finished (and Colldev is running with flag --exit)
            endScenarios.push(forServicesReady(this.compiler, this.server, this.browserSpawner));
        }

        if (disconnect) {
            // 📝 Ending when last client disconnects from Colldev server (and Colldev is running with flag --disconnect)
            endScenarios.push(
                new Promise((resolve, reject) => {
                    let alreadyConnected = false;

                    // TODO: Await promises - avoid callback hell
                    this.server.status.subscribe(({ clients }) => {
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
                this.browserSpawner.status.subscribe(async (browserSpawnerStatus) => {
                    if (browserSpawnerStatus.errors.length) {
                        await forImmediate();
                        reject(joinErrors(...browserSpawnerStatus.errors));
                    }
                });
            }),
        );

        await Promise.race(endScenarios);

        return `Module is working successfully.`;
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
            compiler: this.compiler && compilerStatusToJson(this.compiler.status.value),
            server: this.server && this.server.status.value,
            browserSpawner: this.browserSpawner && this.browserSpawner.status.value,
        };
    }

    public async destroy() {
        await super.destroy();
        await this.compiler.destroy();
        await this.server.destroy();
        await this.browserSpawner.destroy();
    }
}
