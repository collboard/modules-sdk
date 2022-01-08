import { readFile } from 'fs';
// Note: vm2 library is using setimmediate and we need to run jest in jsdom in which setImmediate is not available. So we are using setimmediate polyfill.
import 'setimmediate';
import { promisify } from 'util';
import { NodeVM } from 'vm2';
import { string_file_absolute_path } from '../../../../../types';

export async function readConfigFile<T>(configFilePath: string_file_absolute_path): Promise<T> {
    if (configFilePath.endsWith('.json')) {
        return JSON.parse(await promisify(readFile)(configFilePath, 'utf8')) as T;
    } else if (configFilePath.endsWith('.js')) {
        const configFileContent = await promisify(readFile)(configFilePath, 'utf8');
        const vm = new NodeVM({
            require: {
                external: true,
            },
        });

        return vm.run(configFileContent) as T;
    } else {
        throw new Error(`Unsupported config file type: ${configFilePath}`);
    }
}
