import commander from 'commander';
import { Destroyable, IDestroyable } from 'destroyable';
import { getColldevPackageContent } from '../Compiler/utils/colldevPackage';
import { ColldevDevelop } from './commands/develop/ColldevDevelop';
import { ColldevPublish } from './commands/publish/ColldevPublish';

export class Colldev extends Destroyable implements IDestroyable {
    constructor(readonly argv?: string[]) {
        super();
        this.init();
    }

    private async init() {
        //const { program } = await this.createProgram();

        const program = new commander.Command();
        program.version((await getColldevPackageContent()).version);

        this.addSubdestroyable(
            // @see how should Colldev look draft in https://collboard.com/bg2d46prjb4oiwpsw6xw
            new ColldevDevelop(program),
            new ColldevPublish(program),
            // TODO: command init
            // TODO: command test
            // TODO: command login
        );

        program.parse(this.argv);
    }

    private async runDeploy() {
        // TODO: !!!
        console.log(
            `\x1b[44mWe are still working on automatical deployment\nPlease send us your work to dev@collboard.com\x1b[0m`,
        );
    }
}
