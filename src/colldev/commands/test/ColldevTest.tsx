import commander from 'commander';
import { Destroyable } from 'destroyable';
import { Box } from 'ink';
import { join } from 'path';
import * as React from 'react';
import { map } from 'rxjs/operators';
import spaceTrim from 'spacetrim';
import { TEST_TEMPORARY_RELATIVE_PATH } from '../../config';
import { CompilerStatusOutputComponent } from '../../services/Compiler/CompilerStatusOutputComponent';
import { ProductionCompiler } from '../../services/Compiler/ProductionCompiler';
import { forServicesReady } from '../../utils/forServicesReady';
import { getUniqueFoldername } from '../../utils/getUniqueFoldername';
import { ObservableContentComponent } from '../../utils/ObservableContentComponent';
import { ColldevDevelop } from '../develop/ColldevDevelop';
import { ICommand } from '../ICommand';
import { IColldevTestOptions } from './IColldevTestOptions';
import { IColldevTestStatus } from './IColldevTestStatus';

export class ColldevTest extends Destroyable implements ICommand<IColldevTestOptions, IColldevTestStatus> {
    public readonly name = 'test';

    public init(program: commander.Command) {
        return (
            program
                .command('test [path]')
                .description(`Test collboard module`)
                .option(
                    // TODO: What is better collboard-url or collboard?
                    '-c, --collboard-url <url>',
                    `Url of development Collboard`,
                    'https://dev.collboard.com',
                )
                .option(
                    '-o, --open <openMode>',
                    spaceTrim(`
                Strategy for automatically opening the browser:
                    - "system" open default system browser, this browser is not controlled by Colldev;
                    - "none" for just running colldev without opening the browser;
                    - "single" for wait some time if the Collboard connects to Colldev, if yes do nothing if no open new browser window with collboard;
                    - "multiple" new browser window for each Colldev running
            `),
                    'multiple',
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
                    true,
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
                    '-d, --disconnect',
                    spaceTrim(`
                Exit the CLI when Collboard disconnects from Colldev.

                    Note: It allows closing CLI by closing a browser
            `),
                    true,
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

                .action(this.run.bind(this))
        );
    }

    private developCommand = new ColldevDevelop();
    private compiler?: ProductionCompiler;

    public async run(options: IColldevTestOptions) {
        const { workingDir, entryPath } = options;

        // Note: Testing that modules can be developed
        await this.developCommand.run({
            ...options,
            exit: true,
        });

        // Note: Testing that modules can be compiled
        this.compiler = new ProductionCompiler({
            workingDir,
            entryPath,
            outDir: join(TEST_TEMPORARY_RELATIVE_PATH, getUniqueFoldername()),
            cleanup: true,
        });
        await forServicesReady(this.compiler);

        return `Modules are tested successfully.`;
    }

    public render(options: IColldevTestOptions) {
        return (
            <Box borderStyle="round" display="flex" flexDirection="column" borderColor={'yellow'}>
                {!this.compiler ? (
                    this.developCommand.render({
                        ...options,
                        exit: true,
                    })
                ) : (
                    <ObservableContentComponent
                        content={this.compiler.status.pipe(
                            map((compilerStatus) => <CompilerStatusOutputComponent {...{ compilerStatus }} />),
                        )}
                    />
                )}
            </Box>
        );
    }

    public status() {
        return { develop: this.developCommand.status(), compile: this.compiler?.status.value };
    }
}
