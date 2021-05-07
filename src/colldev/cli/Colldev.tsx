import commander from 'commander';
import { render } from 'ink';
import openBrowser from 'open';
import React from 'react';
import { Compiler } from '../compiler/Compiler';
import { Server } from '../server/Server';
import { getColldevPackageContent } from '../utils/colldevPackage';
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
                .command('develop', { isDefault: true })
                // TODO: browser
                .alias('start')
                .description(`Start developing collboard module. Runs compiler+dev server.`)
                .option(
                    '-o, --open <url>',
                    `Url of dev collboard OR 'false' to not open any page. `,
                    'https://dev.collboard.com',
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

    private async runDevelop({ open }: { open: string }) {
        if (open !== 'false') {
            openBrowser(open);
        }

        const compiler = new Compiler();
        const server = new Server(compiler);

        this.addSubdestroyable(compiler, server);

        render(<OutputComponent {...{ compiler, server }} />);
    }

    private async runDeploy() {
        // TODO: !!
        console.log(
            `\x1b[44mWe are still working on automatical deployment\nPlease send us your work to dev@collboard.com\x1b[0m`,
        );
    }
}
