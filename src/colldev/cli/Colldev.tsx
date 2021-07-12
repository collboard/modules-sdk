import chalk from 'chalk';
import commander from 'commander';
import { render } from 'ink';
import openBrowser from 'open';
import React from 'react';
import { filter } from 'rxjs/operators';
import { Compiler } from '../compiler/Compiler';
import { getColldevPackageContent } from '../compiler/utils/colldevPackage';
import { ColldevServer } from '../server/ColldevServer';
import { Destroyable } from '../utils/destroyables/Destroyable';
import { IDestroyable } from '../utils/destroyables/IDestroyable';
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
                    `"redirect" for redirecting to development Collboard;\n "about" for showing Colldev page with more info;\n "none" for silent run of Colldev`,
                    'redirect',
                )
                .option('-e, --exit', `Exit after succesfully started with propper exit code`)
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
        { collboard, open, exit }: { collboard: string; open: 'redirect' | 'about' | 'none'; exit: boolean },
    ) {
        // console.info('develop:', { path, collboard, open });

        let uriParams = '';
        if (collboard !== 'https://dev.collboard.com') {
            uriParams = `?collboardUrl=${encodeURIComponent(collboard)}`;
        }

        // TODO: Maybe also close the browser in case of exiting the process / auto exit by --exit
        if (open === 'redirect') {
            openBrowser(`http://localhost:3000/${uriParams}`);
        } else if (open === 'about') {
            openBrowser(`http://localhost:3000/about${uriParams}`);
        }

        const compiler = new Compiler(path || './');
        const server = new ColldevServer(compiler);

        this.addSubdestroyable(compiler, server);

        if (!exit) {
            render(<OutputComponent {...{ compiler, server }} />);
        } else {
            compiler.statuses.pipe(filter(({ ready }) => ready)).subscribe(({ stats }) => {
                if (stats?.hasErrors()) {
                     console.error(
                        stats?.toString({
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
