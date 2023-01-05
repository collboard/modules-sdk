import chalk from 'chalk';
import commander from 'commander';
import { Destroyable, IDestroyable } from 'destroyable';
import { Instance, render } from 'ink';
import * as React from 'react';
import spaceTrim from 'spacetrim';
import { string_folder_relative_path } from '../../types';
import { IColldevOptions } from './IColldevOptions';
import { ICommand } from './commands/ICommand';
import { ColldevBuild } from './commands/build/ColldevBuild';
import { ColldevDevelop } from './commands/develop/ColldevDevelop';
import { ColldevPublish } from './commands/publish/ColldevPublish';
import { ColldevTest } from './commands/test/ColldevTest';
import { cleanupOldTemporaryAssets } from './services/Compiler/utils/cleanupOldTemporaryAssets';
import { getColldevConfig } from './services/Compiler/utils/getColldevConfig';
import { ErrorBoundary } from './utils/ErrorBoundary';
import { compactErrorReport } from './utils/cliLogging/compactErrorReport';
import { compactSuccessReport } from './utils/cliLogging/compactSuccessReport';
import { getColldevPackageJsonContent } from './utils/getColldevPackageJsonContent';
import { jsonReplacer } from './utils/jsonReplacer';

export class Colldev extends Destroyable implements IDestroyable {
    private program: commander.Command;
    private commands: Array<ICommand<IColldevOptions, any>> = [
        new ColldevDevelop(),
        new ColldevTest(),
        new ColldevBuild(),
        new ColldevPublish(),
        // TODO: Colldev(Extract)Manifests
    ];
    private renderingInstance: Instance | null = null;

    constructor(readonly argv?: Array<string>) {
        super();
        this.init();
    }

    private async init() {
        //const { program } = await this.createProgram();

        this.program = new commander.Command();
        this.program.name('colldev');
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
                    workingDir = workingDir || '.';
                    const config = await getColldevConfig(workingDir).catch(async (error) => {
                        compactErrorReport(error);
                        await this.destroy();
                        process.exit(1);
                    });
                    const options: IColldevOptions = { workingDir, ...config, ...config[command.name], ...flags };

                    const { output } = options;

                    const runningCommand = command.run(options);

                    if (output === 'human') {
                        this.renderingInstance = render(<ErrorBoundary>{command.render(options)}</ErrorBoundary>);

                        // TODO: DRY
                        runningCommand
                            .then(async (finalSuccessMessage) => {
                                console.info(chalk.green(finalSuccessMessage));
                                await this.destroy();
                                process.exit(0);
                            })
                            .catch(async (error: Error) => {
                                // TODO: Probbably use compactErrorReport
                                console.info(
                                    chalk.bgRed(chalk.white(error.name + ': ')) + ' ' + chalk.red(error.message),
                                );
                                console.info(chalk.redBright((error.stack || '').replace(error.message, '')));
                                await this.destroy();
                                process.exit(1);
                            });
                    } else if (output === 'compact') {
                        // TODO: DRY
                        runningCommand
                            .then(async (finalSuccessMessage) => {
                                compactSuccessReport(finalSuccessMessage);
                                await this.destroy();
                                process.exit(0);
                            })
                            .catch(async (error: Error) => {
                                compactErrorReport(error);
                                await this.destroy();
                                process.exit(1);
                            });
                    } else if (output === 'minimal') {
                        // TODO: DRY
                        runningCommand
                            .then(async () => {
                                console.info(chalk.green(chalk.bold(`Success`)));
                                await this.destroy();
                                process.exit(0);
                            })
                            .catch(async (error: Error) => {
                                // TODO: Probbably use compactErrorReport with some isMinimal flag
                                console.error(chalk.bgRed(chalk.white(error.name)));
                                await this.destroy();
                                process.exit(1);
                            });
                    } else if (output === 'json' || output === 'json-raw') {
                        const jsonSpace = output === 'json' ? 4 : undefined;
                        runningCommand
                            .then(async () => {
                                console.info(JSON.stringify(command.status(), jsonReplacer, jsonSpace));
                                await this.destroy();
                                process.exit(0);
                            })
                            .catch(async (error: Error) => {
                                // TODO: Probbably show the error
                                console.info(JSON.stringify({ ...command.status(), error }, jsonReplacer, jsonSpace));
                                await this.destroy();
                                process.exit(1);
                            });
                    } else {
                        console.info(
                            chalk.red(`Unknown type of output "${output}", please use "human", "json" or "json-raw".`),
                        );

                        await this.destroy();
                        process.exit(1);
                    }
                });
        }

        this.program.parse(this.argv);
    }

    public async destroy() {
        await super.destroy();

        this.renderingInstance?.unmount();

        for (const command of this.commands) {
            await command.destroy();
        }

        await cleanupOldTemporaryAssets();
    }
}
