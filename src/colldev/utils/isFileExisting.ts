import { access, constants,stat } from 'fs';
import { promisify } from 'util';
import { string_file_path } from '../../../types';

export async function isFileExisting(filePath: string_file_path): Promise<boolean> {
    try {
        await promisify(access)(filePath, constants.R_OK);
        const fileStat = await promisify(stat)(filePath);
        return fileStat.isFile();
    } catch (error) {
        return false;
    }
}
