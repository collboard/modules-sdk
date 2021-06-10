import { access, constants, readFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

function getModulePackagePath(workingDir: string): string {
    const packagePath = join(process.cwd(), workingDir, 'package.json');
    return packagePath;
}

async function getModulePackageContent(workingDir: string): Promise<any> {
    try {
        const packagePath = getModulePackagePath(workingDir);
        await promisify(access)(packagePath, constants.R_OK);
        const packageContentString = await promisify(readFile)(packagePath, 'utf8');
        const packageContent = JSON.parse(packageContentString);
        return packageContent;
    } catch (error) {
        console.error(error);
        throw new Error(`Colldev did not found valid package.json`);
    }
}
export async function getModulePackageMainPath(workingDir: string): Promise<string> {
    const mainPathRelative = (await getModulePackageContent(workingDir)).main;
    if (!mainPathRelative) {
        throw new Error(`Colldev did not found main entry in package.json`);
    }
    const mainPath = join(process.cwd(), workingDir, mainPathRelative);

    try {
        await promisify(access)(mainPath, constants.R_OK);
    } catch (error) {
        console.error(error);
        throw new Error(`Colldev cannot acces main entry "${mainPath}" defined in package.json`);
    }

    return mainPath;
}

// TODO: Warn if project is not versioned by GIT
// TODO: !! Test version compatibility
