import chalk from 'chalk';
import commander from 'commander';
import { Destroyable, IDestroyable } from 'destroyable';
import { Instance, render } from 'ink';
import { ColldevDevelop } from './commands/develop/ColldevDevelop';
import { ICommand } from './commands/ICommand';
import { ColldevPublish } from './commands/publish/ColldevPublish';
import { IColldevOptions } from './IColldevOptions';
import { getColldevPackageContent } from './utils/getColldevPackageContent';

export class Colldev extends Destroyable implements IDestroyable {
    private program: commander.Command;
    private commands: Array<ICommand<IColldevOptions, any>> = [new ColldevDevelop(), new ColldevPublish()];
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
                                console.info(chalk.green(`Success`));
                                process.exit(0);
                            })
                            .catch((error) => {
                                this.renderingInstance?.unmount();
                                console.info(chalk.red(error.message));
                                process.exit(1);
                            });
                    } else if (output === 'json') {
                        // TODO: DRY
                        runningCommand
                            .then(() => {
                                console.info(JSON.stringify(command.status(), null, 4));
                                process.exit(0);
                            })
                            .catch((error) => {
                                console.info(JSON.stringify(command.status(), null, 4));
                                // TODO: Probbably show the error
                                process.exit(1);
                            });
                    } else if (output === 'json-raw') {
                        // TODO: DRY
                        runningCommand
                            .then(() => {
                                console.info(JSON.stringify(command.status()));
                                process.exit(0);
                            })
                            .catch((error) => {
                                console.info(JSON.stringify(command.status()));
                                // TODO: Probbably show the error
                                process.exit(1);
                            });
                    } else {
                        console.info(`Unknown flag "--output ${output}".`);
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
