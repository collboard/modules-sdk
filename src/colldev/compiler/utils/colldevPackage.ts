import { access, constants, readFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

function getColldevPackagePath(): string {
    const packagePath = join(__dirname, '../../../package.json');
    return packagePath;
}

export async function getColldevPackageContent(): Promise<any> {
    try {
        const packagePath = getColldevPackagePath();
        await promisify(access)(packagePath, constants.R_OK);
        const packageContentString = await promisify(readFile)(packagePath, 'utf8');
        const packageContent = JSON.parse(packageContentString);
        return packageContent;
    } catch (error) {
        console.error(error);
        throw new Error(`Colldev did not found valid package.json`);
    }
}
