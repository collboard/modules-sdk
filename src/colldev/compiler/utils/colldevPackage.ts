import { access, constants, readFile } from 'fs';
import { promisify } from 'util';
import { getColldevPackagePath } from './getColldevPackagePath';

export async function getColldevPackageContent(): Promise<any> {
    try {
        const packagePath = getColldevPackagePath();
        await promisify(access)(packagePath, constants.R_OK);
        const packageContentString = await promisify(readFile)(packagePath, 'utf8');
        const packageContent = JSON.parse(packageContentString);
        return packageContent;
    } catch (error) {
        console.error(error);
        throw new Error(`Colldev recognized some internal error\n Missing internal package.json`);
    }
}
