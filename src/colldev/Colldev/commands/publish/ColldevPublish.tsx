import commander from 'commander';
import { Destroyable, IDestroyable } from 'destroyable';
import { IColldevPublishOptions } from './IColldevPublishOptions';

export class ColldevPublish extends Destroyable implements IDestroyable {
    constructor(program: commander.Command) {
        super();
        program.command('publish').alias('deploy').description(`Deploy collboard module.`).action(this.run.bind(this));
    }

    private async run(/*path: string, */ options: IColldevPublishOptions) {
        const {} = options;
        console.log(
            `\x1b[44mWe are still working on automatical deployment\nPlease send us your work to dev@collboard.com\x1b[0m`,
        );
    }
}
