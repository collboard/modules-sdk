import commander from 'commander';
import { render } from 'ink';
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
                .alias('start')
                .description(`Start developing collboard module. Runs compiler+dev server.`)
                .action(this.runDevelop.bind(this)),
        };

        return { program, commands };
    }

    private async runDevelop() {
        const compiler = new Compiler();
        const server = new Server(compiler);

        this.addSubdestroyable(compiler, server);

        render(<OutputComponent {...{ compiler, server }} />);
    }
}
