import { access, constants, readFile } from 'fs';
import { promisify } from 'util';
import { InternalError } from '../services/Compiler/errors/InternalError';
import { getColldevPackageJsonPath } from './getColldevPackageJsonPath';

export async function getColldevPackageJsonContent(): Promise<any> {
    try {
        const packageJsonPath = getColldevPackageJsonPath();
        await promisify(access)(packageJsonPath, constants.R_OK);
        const packageJsonContentString = await promisify(readFile)(packageJsonPath, 'utf8');
        const packageJsonContent = JSON.parse(packageJsonContentString);
        return packageJsonContent;
    } catch (error) {
        throw new InternalError(`Colldev recognized some internal error\n Missing internal package.json`);
    }
}
