import { readdir, unlink } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import { DEVELOP_TEMPORARY_PATH } from '../../../config';

export async function cleanupTemporaryAssets() {
    // TODO: !!! Get this work
    try {
        for (const filePath of await promisify(readdir)(DEVELOP_TEMPORARY_PATH)) {
            await promisify(unlink)(join(DEVELOP_TEMPORARY_PATH, filePath));
        }
    } catch (error) {
        console.error('Can not propperly cleanup temporary folder from previous Colldev run:', error);
    }
}
