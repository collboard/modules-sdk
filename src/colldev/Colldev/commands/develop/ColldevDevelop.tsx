import commander from 'commander';
import { Destroyable, IDestroyable } from 'destroyable';
import { render } from 'ink';
import React from 'react';
import { filter } from 'rxjs/operators';
import { BrowserSpawner } from '../../../BrowserSpawner/BrowserSpawner';
import { ColldevServer } from '../../../ColldevServer/ColldevServer';
import { Compiler } from '../../../Compiler/Compiler';
import { CompilerStatusOutputComponent } from '../../../Compiler/CompilerStatusOutputComponent';
import { OutputComponent } from './../../OutputComponent';
import { IColldevDevelopOptions } from './IColldevDevelopOptions';

export class ColldevDevelop extends Destroyable implements IDestroyable {
    constructor(program: commander.Command) {
        super();
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
                    `"multiple" new browser window for each colldev running`,

                'single',
            )
            .option(
                '-b, --browser <browser>',
                `` /* TODO: Use here spacetrim */ +
                    `Which browser use\n` +
                    // TODO: !!! options + implement
                    //`Note: This option is especially usefull when testing` +
                    `Note: This flag has no effect with flag "--open none"`,
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
                '-o, --output <outputType>',
                `` /* TODO: Use here spacetrim */ +
                    `Output from the compiler\n` +
                    `"human" for human readable ASCII like, colorfull output;\n` +
                    `"json" for pretty JSON;\n` +
                    `"json-raw" for raw minified JSON;\n` +
                    `Note: It can be used only with flag "--exit"`,
                'human',
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
                ``, // TODO: !!! options + implement
                false,
            )
            .action(this.run.bind(this));
    }

    private async run(path: string, options: IColldevDevelopOptions) {
        const { exit, output } = options;
        //console.info('develop:', { path, options });
        //process.exit();

        const compiler = new Compiler(path || './');
        const server = new ColldevServer(compiler, { path, ...options });
        const browserSpawner = new BrowserSpawner(server, options);

        this.addSubdestroyable(compiler, server, browserSpawner);

        if (!exit) {
            render(<OutputComponent {...{ compiler, server }} />);
        } else {
            compiler.statuses.pipe(filter(({ ready }) => ready)).subscribe((status) => {
                // TODO: !!! Some smarter reports what is and what is not working + structural report

                if (output === 'human') {
                    render(<CompilerStatusOutputComponent {...status} />);
                } else if (output === 'json') {
                    console.info(JSON.stringify(status, null, 4));
                } else if (output === 'json-raw') {
                    console.info(JSON.stringify(status));
                } else {
                    console.info(`Unknown flag "--output ${output}".`);
                }
                process.exit(status.error ? 1 : 0);
            });
        }
    }
}
