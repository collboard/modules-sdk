import { readFile } from 'fs';
// Note: vm2 library is using setimmediate and we need to run jest in jsdom in which setImmediate is not available. So we are using setimmediate polyfill.
import 'setimmediate';
import { promisify } from 'util';
import { NodeVM } from 'vm2';
import { string_file_path } from '../../../../../types';

export async function readConfigFile<T>(configFilePath: string_file_path): Promise<T> {
    const configFileContent = await promisify(readFile)(configFilePath, 'utf8');

    const vm = new NodeVM({
        require: {
            external: true,
        },
    });

    const config = vm.run(configFileContent) as T;

    return config;
}
