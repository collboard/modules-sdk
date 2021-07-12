import { mkdir } from 'fs';
import { promisify } from 'util';
import { ASSETS_PATH } from '../../config';


export async function makeColldevFolder() {
    await promisify(mkdir)(ASSETS_PATH, { recursive: true });
}
