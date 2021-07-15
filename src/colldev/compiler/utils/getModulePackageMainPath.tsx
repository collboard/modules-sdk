import { access, constants } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import { MainEntryNotFoundError } from '../errors/NotFoundError';
import { getModulePackageContent } from './getModulePackageContent';

export async function getModulePackageMainPath(workingDir: string): Promise<string> {
    const mainPathRelative = (await getModulePackageContent(workingDir)).main;
    if (!mainPathRelative) {
        throw new Error(`Colldev did not found main entry in package.json`);
    }
    const mainPath = join(process.cwd(), workingDir, mainPathRelative);

    try {
        await promisify(access)(mainPath, constants.R_OK);
    } catch (error) {
        throw new MainEntryNotFoundError(`Colldev cannot acces main entry "${mainPath}" defined in package.json`);
    }

    return mainPath;
    // TODO: Warn if project is not versioned by GIT
    // TODO: !! Test version compatibility
}
