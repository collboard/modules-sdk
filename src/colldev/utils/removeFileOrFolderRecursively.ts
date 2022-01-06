import { access, constants, readdir, stat, unlink } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import { string_file_path, string_folder_path } from '../../../types';

export async function removeFileOrFolderRecursively(path: string_folder_path | string_file_path) {
    try {
        try {
            await promisify(access)(path, constants.R_OK);
        } catch (error) {
            return;
        }
        const fileStat = await promisify(stat)(path);

        if (fileStat.isFile()) {
            await promisify(unlink)(path);
        } else if (fileStat.isDirectory()) {
            for (const sub of await promisify(readdir)(path)) {
                await removeFileOrFolderRecursively(join(path, sub));
            }

            await promisify(unlink)(path);
        } else {
            throw new Error(`Unsupported file type: ${path}`);
        }
    } catch (error) {
        // console.warn(error);
    }
}

/**
 * TODO: Crash on error param
 */
