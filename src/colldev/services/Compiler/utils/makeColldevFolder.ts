import { mkdir } from 'fs';
import { promisify } from 'util';
import { DEVELOP_TEMPORARY_PATH } from '../../../config';

export async function makeColldevFolder() {
    await promisify(mkdir)(DEVELOP_TEMPORARY_PATH, { recursive: true });
}
