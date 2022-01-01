import { join } from 'path';
// Note: vm2 library is using setimmediate and we need to run jest in jsdom in which setImmediate is not available. So we are using setimmediate polyfill.
import 'setimmediate';
import { IColldevConfig } from '../../../commands/IColldevConfig';
import { COLLDEV_CONFIG_BASENAMES, COLLDEV_CONFIG_DEFAULT } from '../../../config';
import { isFileExisting } from '../../../utils/isFileExisting';
import { readConfigFile } from './readConfigFile';

export async function getColldevConfig(workingDir: string): Promise<IColldevConfig> {
    for (const configFileBasename of COLLDEV_CONFIG_BASENAMES) {
        const configFilePath = join(process.cwd(), workingDir, configFileBasename);

        if (await isFileExisting(configFilePath)) {
            return await readConfigFile<IColldevConfig>(configFilePath);
        }
    }

    for (const fileBasename of ['package.json', 'tsconfig.json']) {
        const filePath = join(process.cwd(), workingDir, fileBasename);

        if (await isFileExisting(filePath)) {
            const content = await readConfigFile<any>(filePath);
            if (content.colldev) {
                return content.colldev;
            }
        }
    }

    return COLLDEV_CONFIG_DEFAULT;
}

/**';
 * TODO: Warn if project is not versioned by GIT
 * TODO: Test version compatibility
 */
