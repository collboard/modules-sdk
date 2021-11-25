import chalk from 'chalk';
import commander from 'commander';
import { Destroyable, IDestroyable } from 'destroyable';
import { Instance, render } from 'ink';
import { ColldevBuild } from './commands/build/ColldevBuild';
import { ColldevDevelop } from './commands/develop/ColldevDevelop';
import { ICommand } from './commands/ICommand';
import { ColldevPublish } from './commands/publish/ColldevPublish';
import { IColldevOptions } from './IColldevOptions';
import { getColldevPackageContent } from './utils/getColldevPackageContent';
import { jsonReplacer } from './utils/jsonReplacer';

export class Colldev extends Destroyable implements IDestroyable {
    private program: commander.Command;
    private commands: Array<ICommand<IColldevOptions, any>> = [
        new ColldevDevelop(),
        new ColldevBuild(),
        new ColldevPublish(),
    ];
    private renderingInstance: Instance | null = null;

    constructor(readonly argv?: string[]) {
        super();
        this.init();
    }

    private async init() {
        //const { program } = await this.createProgram();

        this.program = new commander.Command();
        this.program.version((await getColldevPackageContent()).version);

        for (const command of this.commands) {
            command
                .init(this.program)
                .option(
                    '-o, --output <outputType>',
                    `` /* TODO: Use here spacetrim */ +
                        `Output from the compiler\n` +
                        `"human" for human readable ASCII like, colorfull output;\n` +
                        `"minimal" for just saying "OK" or report error;\n` +
                        `"minimal-strict" for just saying "OK" or report FIRST LINE of error;\n` +
                        `"json" for pretty JSON;\n` +
                        `"json-raw" for raw minified JSON;\n`,
                    'human',
                )
                .action(async (path: string, options: IColldevOptions) => {
                    //console.info(`${command.constructor.name}:`, { path, options });
                    //process.exit();

                    const { output } = options;

                    const runningCommand = command.run(path, options);

                    if (output === 'human') {
                        this.renderingInstance = render(command.render(options));

                        // TODO: DRY
                        runningCommand
                            .then(() => {
                                this.renderingInstance?.unmount();
                                console.info(chalk.green(`Module is working successfully.`));
                                process.exit(0);
                            })
                            .catch((error: Error) => {
                                this.renderingInstance?.unmount();
                                console.info(chalk.red(error.message));
                                process.exit(1);
                            });
                    } else if (output === 'json') {
                        // TODO: DRY
                        runningCommand
                            .then(() => {
                                console.info(JSON.stringify(command.status(), jsonReplacer, 4));
                                process.exit(0);
                            })
                            .catch((error: Error) => {
                                console.info(JSON.stringify({ ...command.status(), error }, jsonReplacer, 4));
                                // TODO: Probbably show the error
                                process.exit(1);
                            });
                    } else if (output === 'minimal') {
                        // TODO: DRY
                        runningCommand
                            .then(() => {
                                console.info(chalk.green(chalk.bold(`OK`)));
                                process.exit(0);
                            })
                            .catch((error: Error) => {
                                console.info(chalk.red(error));
                                process.exit(1);
                            });
                    } else if (output === 'minimal-strict') {
                        // TODO: DRY
                        runningCommand
                            .then(() => {
                                console.info(chalk.green(chalk.bold(`OK`)));
                                process.exit(0);
                            })
                            .catch((error: Error) => {
                                console.info(chalk.red(error.message.split('\n')[0]));
                                process.exit(1);
                            });
                    } else if (output === 'json-raw') {
                        // TODO: DRY
                        runningCommand
                            .then(() => {
                                console.info(JSON.stringify(command.status(), jsonReplacer));
                                process.exit(0);
                            })
                            .catch((error: Error) => {
                                console.info(JSON.stringify({ ...command.status(), error }, jsonReplacer));
                                // TODO: Probbably show the error
                                process.exit(1);
                            });
                    } else {
                        console.info(
                            chalk.red(`Unknown type of output "${output}", please use "human", "json" or "json-raw".`),
                        );
                        process.exit(1);
                    }
                });
        }

        this.program.parse(this.argv);
    }

    public async destroy() {
        await super.destroy();
        for (const command of this.commands) {
            await command.destroy();
        }
    }
}
