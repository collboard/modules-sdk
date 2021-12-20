import { access, constants } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import { MainEntryNotFoundError } from '../errors/MainEntryNotFoundError';
import { getModulePackageJsonContent } from './getModulePackageJsonContent';

export async function getModuleEntryPath(workingDir: string): Promise<string> {
    const entryPathRelative = (await getModulePackageJsonContent(workingDir)).main;
    if (!entryPathRelative) {
        throw new Error(`Colldev did not found main entry in package.json`);
    }
    const entryPath = join(process.cwd(), workingDir, entryPathRelative);

    try {
        await promisify(access)(entryPath, constants.R_OK);
    } catch (error) {
        throw new MainEntryNotFoundError(`Colldev cannot acces main entry "${entryPath}" defined in package.json`);
    }

    return entryPath;
    // TODO: Warn if project is not versioned by GIT
    // TODO: !! Test version compatibility
}
