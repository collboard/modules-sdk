import chalk from 'chalk';
import commander from 'commander';
import { Destroyable, IDestroyable } from 'destroyable';
import { render } from 'ink';
import React from 'react';
import { filter } from 'rxjs/operators';
import { BrowserSpawner } from '../BrowserSpawner/BrowserSpawner';
import { ColldevServer } from '../ColldevServer/ColldevServer';
import { Compiler } from '../Compiler/Compiler';
import { getColldevPackageContent } from '../Compiler/utils/colldevPackage';
import { IColldevDevelopOptions } from './IColldevDevelopOptions';
import { OutputComponent } from './OutputComponent';

export class Colldev extends Destroyable implements IDestroyable {
    constructor(readonly argv?: string[]) {
        super();
        this.init();
    }

    private async init() {
        const { program } = await this.createProgram();
        program.parse(this.argv);
    }

    /**
     *
     * @see https://collboard.com/bg2d46prjb4oiwpsw6xw
     */
    private async createProgram(): Promise<{ program: commander.Command; commands: any }> {
        const program = new commander.Command();
        program.version((await getColldevPackageContent()).version);

        const commands = {
            develop: program
                .command('develop [path]', { isDefault: true })
                // TODO: browser
                .alias('start')
                .description(`Start developing collboard module. Runs compiler+dev server.`)
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
                    '-h, --headless',
                    `` /* TODO: Use here spacetrim */ +
                        `Opens the browser in headless mode\n` +
                        `Note: This option is especially usefull when testing` +
                        `Note: This option has no effect with option "--open none"`,
                    false,
                )
                .option(
                    '-b, --browser',
                    `` /* TODO: Use here spacetrim */ +
                        `Which browser use\n` +
                        // TODO: !!! options + implement
                        //`Note: This option is especially usefull when testing` +
                        `Note: This option has no effect with option "--open none"`,
                    'default',
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
                    '-p, --port',
                    `` /* TODO: Use here spacetrim */ +
                        `On which port will be Colldev server running\n` +
                        // TODO: !!! options + implement
                        '3000+',
                )
                .option(
                    '-e, --expose',
                    ``, // TODO: !!! options + implement
                    false,
                )
                .action(this.runDevelop.bind(this)),
            publish: program
                .command('publish')
                .alias('deploy')
                .description(`Deploy collboard module.`)
                .action(this.runDeploy.bind(this)),

            // TODO: init
            // TODO: maybe build
            // TODO: test
            // TODO: login
        };

        return { program, commands };
    }

    private async runDevelop(path: string, options: IColldevDevelopOptions) {
        const { collboardUrl, open, headless, wait, exit } = options;
        //console.info('develop:', options);

        const compiler = new Compiler(path || './');
        const server = new ColldevServer(compiler, { collboardUrl });
        const browserSpawner = new BrowserSpawner(server, { open, headless, wait });

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

                console.info(chalk.green(`Working!!!!`));
                process.exit(0);
            });
        }
    }

    private async runDeploy() {
        // TODO: !!!
        console.log(
            `\x1b[44mWe are still working on automatical deployment\nPlease send us your work to dev@collboard.com\x1b[0m`,
        );
    }
}
