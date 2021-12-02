import { access, constants, readFile } from 'fs';
import { PackageJson } from 'type-fest';
import { promisify } from 'util';
import { PackageJsonNotFoundError } from '../errors/PackageJsonNotFoundError';
import { getModulePackageJsonPath } from './getModulePackageJsonPath';

export async function getModulePackageJsonContent(workingDir: string): Promise<PackageJson> {
    const packageJsonPath = getModulePackageJsonPath(workingDir);
    try {
        await promisify(access)(packageJsonPath, constants.R_OK);
        const packageJsonContentString = await promisify(readFile)(packageJsonPath, 'utf8');
        const packageJsonContent = JSON.parse(packageJsonContentString);
        return packageJsonContent;
    } catch (error) {
        throw new PackageJsonNotFoundError(
            `Colldev did not found valid package.json\nExpected location is "${packageJsonPath}"`,
        );
    }
}
