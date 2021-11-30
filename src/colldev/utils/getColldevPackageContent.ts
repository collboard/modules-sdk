import { access, constants, readFile } from 'fs';
import { promisify } from 'util';
import { InternalError } from '../services/Compiler/errors/InternalError';
import { getColldevPackagePath } from './getColldevPackagePath';

export async function getColldevPackageContent(): Promise<any> {
    try {
        const packagePath = getColldevPackagePath();
        await promisify(access)(packagePath, constants.R_OK);
        const packageContentString = await promisify(readFile)(packagePath, 'utf8');
        const packageContent = JSON.parse(packageContentString);
        return packageContent;
    } catch (error) {
        throw new InternalError(`Colldev recognized some internal error\n Missing internal package.json`);
    }
}
