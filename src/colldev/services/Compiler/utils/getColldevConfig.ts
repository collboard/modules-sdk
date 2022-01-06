import { join } from 'path';
// Note: vm2 library is using setimmediate and we need to run jest in jsdom in which setImmediate is not available. So we are using setimmediate polyfill.
import 'setimmediate';
import spaceTrim from 'spacetrim';
import { string_folder_relative_path } from '../../../../../types';
import { IColldevConfig } from '../../../commands/IColldevConfig';
import { COLLDEV_CONFIG_BASENAMES, COLLDEV_CONFIG_POSSIBLE_DEFAULT_ENTRY_RELATIVE_PATHS } from '../../../config';
import { isFileExisting } from '../../../utils/isFileExisting';
import { readConfigFile } from './readConfigFile';

export async function getColldevConfig(workingDir: string_folder_relative_path): Promise<IColldevConfig> {
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

    for (const entryPath of COLLDEV_CONFIG_POSSIBLE_DEFAULT_ENTRY_RELATIVE_PATHS) {
        const fullPath = join(process.cwd(), workingDir, entryPath);

        if (await isFileExisting(fullPath)) {
            return { entryPath };
        }
    }

    throw new Error(
        spaceTrim(`
            No possible entry found.
            You need to provide one of the following:
            1. ${COLLDEV_CONFIG_BASENAMES.join(' or ')} config file in the root of your project with entryPath
            2. package.json or tsconfig.json with colldev config with entryPath
            3. flag -e or --entry-path
            4. Main entry file on ${COLLDEV_CONFIG_BASENAMES.join(' or ')}
        `),
    );
}

/**';
 * TODO: Warn if project is not versioned by GIT
 * TODO: Test version compatibility
 */
