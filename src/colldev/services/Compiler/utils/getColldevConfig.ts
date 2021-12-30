import { readFile } from 'fs';
import { join } from 'path';
// Note: vm2 library is using setimmediate and we need to run jest in jsdom in which setImmediate is not available. So we are using setimmediate polyfill.
import 'setimmediate';
import { promisify } from 'util';
import { NodeVM } from 'vm2';
import { IColldevConfig } from '../../../commands/IColldevConfig';
import { IColldevOptions } from '../../../IColldevOptions';

export async function getColldevConfig({
    workingDir,
    commandName,
    flags,
}: {
    workingDir: string;
    commandName: string;
    flags: any;
}): Promise<IColldevOptions> {
    const colldevFile = await promisify(readFile)(join(process.cwd(), workingDir, 'colldev.js'), 'utf8');

    const vm = new NodeVM({
        require: {
            external: true,
        },
    });

    const colldevConfig = vm.run(colldevFile) as IColldevConfig;

    return { ...colldevConfig, ...colldevConfig[commandName], ...flags };
}

/**
 * TODO: Maybe split into multiple files
 * TODO: Warn if project is not versioned by GIT
 * TODO: Test version compatibility
 */
