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
                .option('-c, --collboard <url>', `Url of development Collboard`, 'https://dev.collboard.com')
                .option(
                    '-o, --open <openMode>',
                    `"redirect" for redirecting to development Collboard;` +
                        `"about" for showing Colldev page with more info;` +
                        `"none" for silent run of Colldev`,
                    /* TODO: Use here spacetrim */
                    'redirect',
                )
                // TODO: !!! open - none, single, multiple, multiple
                // TODO: -headless (in case of multiple)
                // TODO: Browser -  chrome
                .option(
                    '-om, --open-multiple',
                    `Detect if Collboard is already opened and if yes do not open it multiple times`,
                    false,
                )
                .option('-e, --exit', `Exit after succesfully started with propper exit code`, false)
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

    private async runDevelop(
        path: string,
        options: { collboard: string; open: 'redirect' | 'about' | 'none'; exit: boolean; openMultiple: boolean },
    ) {
        const { collboard, open, exit, openMultiple } = options;
        //console.info('develop:', options);

        let uriParams = '';
        if (collboard !== 'https://dev.collboard.com') {
            uriParams = `?collboardUrl=${encodeURIComponent(collboard)}`;
        }

        const compiler = new Compiler(path || './');
        const server = new ColldevServer(compiler);
        const browserSpawner = new BrowserSpawner(server, { openMultiple });

        this.addSubdestroyable(compiler, server, browserSpawner);

        if (open === 'redirect') {
            /* not await */ browserSpawner.open(`http://localhost:3000/${uriParams}`);
        } else if (open === 'about') {
            /* not await */ browserSpawner.open(`http://localhost:3000/about${uriParams}`);
        }

        if (!exit) {
            render(<OutputComponent {...{ compiler, server }} />);
        } else {
            compiler.statuses.pipe(filter(({ ready }) => ready)).subscribe(({ stats }) => {
                if (stats?.hasErrors()) {
                    console.error(
                        stats?.toString({
                            // TODO: DRY
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
