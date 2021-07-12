import { readdir, unlink } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import { ASSETS_PATH } from '../../config';

export async function cleanupAssets() {
    for (const filePath of await promisify(readdir)(ASSETS_PATH)) {
        await promisify(unlink)(join(ASSETS_PATH, filePath));
    }
}


