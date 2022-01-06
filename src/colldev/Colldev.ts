import chalk from 'chalk';
import commander from 'commander';
import { Destroyable, IDestroyable } from 'destroyable';
import { Instance, render } from 'ink';
import spaceTrim from 'spacetrim';
import { string_folder_relative_path } from '../../types';
import { ColldevBuild } from './commands/build/ColldevBuild';
import { ColldevDevelop } from './commands/develop/ColldevDevelop';
import { ICommand } from './commands/ICommand';
import { ColldevPublish } from './commands/publish/ColldevPublish';
import { ColldevTest } from './commands/test/ColldevTest';
import { IColldevOptions } from './IColldevOptions';
import { getColldevConfig } from './services/Compiler/utils/getColldevConfig';
import { getColldevPackageJsonContent } from './utils/getColldevPackageJsonContent';
import { jsonReplacer } from './utils/jsonReplacer';

export class Colldev extends Destroyable implements IDestroyable {
    private program: commander.Command;
    private commands: Array<ICommand<IColldevOptions, any>> = [
        new ColldevDevelop(),
        new ColldevTest(),
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
        this.program.version((await getColldevPackageJsonContent()).version);

        for (const command of this.commands) {
            command
                .init(this.program)
                .option(
                    '-o, --output <outputType>',
                    spaceTrim(`
                        Output from the compiler:
                            - "human" human readable ASCII like, colorfull output
                            - "compact" say short success sentence or report error
                            - "minimal" just saying "OK" or report FIRST LINE of error
                            - "json" pretty JSON
                            - "json-raw" raw minified JSON
                    `),
                    'human',
                )
                .option(
                    '-e, --entry-path <file>',
                    spaceTrim(`
                        Entry path for the compiler.
                    `),
                )
                .action(async (workingDir?: string_folder_relative_path, flags?: IColldevOptions) => {
                    //console.info(`${command.constructor.name}:`, { path, options });
                    //process.exit();

                    workingDir = workingDir || '.';
                    const config = await getColldevConfig(workingDir).catch((error) => {
                        console.info(chalk.redBright((error.stack || '').replace(error.message, '')));
                        process.exit(1);
                    });
                    const options: IColldevOptions = { workingDir, ...config, ...config[command.name], ...flags };

                    const { output } = options;

                    const runningCommand = command.run(options);

                    if (output === 'human') {
                        this.renderingInstance = render(command.render(options));

                        // TODO: DRY
                        runningCommand
                            .then((finalSuccessMessage) => {
                                this.renderingInstance?.unmount();
                                console.info(chalk.green(finalSuccessMessage));
                                process.exit(0);
                            })
                            .catch((error: Error) => {
                                this.renderingInstance?.unmount();
                                console.info(
                                    chalk.bgRed(chalk.white(error.name + ': ')) + ' ' + chalk.red(error.message),
                                );
                                console.info(chalk.redBright((error.stack || '').replace(error.message, '')));
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
                    } else if (output === 'compact') {
                        // TODO: DRY
                        runningCommand
                            .then((finalSuccessMessage) => {
                                console.info(chalk.green(finalSuccessMessage));
                                process.exit(0);
                            })
                            .catch((error: Error) => {
                                console.info(
                                    chalk.bgRed(chalk.white(error.name + ': ')) + ' ' + chalk.red(error.message),
                                );
                                console.info(chalk.redBright((error.stack || '').replace(error.message, '')));
                                process.exit(1);
                            });
                    } else if (output === 'minimal') {
                        // TODO: DRY
                        runningCommand
                            .then(() => {
                                console.info(chalk.green(chalk.bold(`Success`)));
                                process.exit(0);
                            })
                            .catch((error: Error) => {
                                console.error(chalk.bgRed(chalk.white(error.name)));
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
