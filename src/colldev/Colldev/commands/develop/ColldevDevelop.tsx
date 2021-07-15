import chalk from 'chalk';
import commander from 'commander';
import { Destroyable, IDestroyable } from 'destroyable';
import { render } from 'ink';
import React from 'react';
import { filter } from 'rxjs/operators';
import { BrowserSpawner } from '../../../BrowserSpawner/BrowserSpawner';
import { ColldevServer } from '../../../ColldevServer/ColldevServer';
import { Compiler } from '../../../Compiler/Compiler';
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
                    `Note: This option has no effect with option "--open none"`,
                'default',
            )
            .option(
                '-h, --headless',
                `` /* TODO: Use here spacetrim */ +
                    `Opens the browser in headless mode\n` +
                    `Note: This option is especially usefull when testing` +
                    `Note: This option has no effect with option "--open none"`,
                false,
            )
            // TODO: Browser -  chrome
            .option(
                '-w, --wait <miliseconds>',
                `` /* TODO: Use here spacetrim */ +
                    `How many miliseconds to wait to connection until opening new browser window with Collboard\n` +
                    `Note: It can be used only with option "--open single"`,

                '2500',
            )
            .option(
                '-e, --exit',
                `` /* TODO: Use here spacetrim */ +
                    `Exit the CLI after succesfully started with propper exit code\n` +
                    `Note: This option is especially usefull when testing`,
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
        const { collboardUrl, open, browser, headless, wait, exit, port, expose } = options;
        //console.info('develop:', { path, options });
        //process.exit();

        const compiler = new Compiler(path || './');
        const server = new ColldevServer(compiler, { collboardUrl, port, expose });
        const browserSpawner = new BrowserSpawner(server, { open, browser, headless, wait });

        this.addSubdestroyable(compiler, server, browserSpawner);

        if (!exit) {
            render(<OutputComponent {...{ compiler, server }} />);
        } else {
            compiler.statuses.pipe(filter(({ ready }) => ready)).subscribe(({ stats }) => {
                if (stats?.hasErrors()) {
                    console.error(
                        stats?.toString({
                            // TODO:  !!! DRY
                            chunks: false, // Makes the build much quieter
                            colors: true, // Shows colors in the console
                        }),
                    );
                    process.exit(1);
                }

                // TODO: !!! Some smarter reports what is and what is not working + structural report
                console.info(chalk.green(`Working!!!!`));
                process.exit(0);
            });
        }
    }
}
