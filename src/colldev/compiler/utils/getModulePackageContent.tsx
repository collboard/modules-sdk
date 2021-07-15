import { access, constants, readFile } from 'fs';
import { promisify } from 'util';
import { PackageNotFoundError } from '../errors/NotFoundError';
import { getModulePackagePath } from './getModulePackagePath';

export async function getModulePackageContent(workingDir: string): Promise<any> {
    const packagePath = getModulePackagePath(workingDir);
    try {
        await promisify(access)(packagePath, constants.R_OK);
        const packageContentString = await promisify(readFile)(packagePath, 'utf8');
        const packageContent = JSON.parse(packageContentString);
        return packageContent;
    } catch (error) {
        throw new PackageNotFoundError(
            `Colldev did not found valid package.json\nExpected location is "${packagePath}"`,
        );
    }
}
