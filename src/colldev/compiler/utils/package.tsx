import { access, constants, readFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

function getPackagePath(): string {
    const packagePath = join(process.cwd(), 'package.json');
    return packagePath;
}

async function getPackageContent(): Promise<any> {
    try {
        const packagePath = getPackagePath();
        await promisify(access)(packagePath, constants.R_OK);
        const packageContentString = await promisify(readFile)(packagePath, 'utf8');
        const packageContent = JSON.parse(packageContentString);
        return packageContent;
    } catch (error) {
        console.error(error);
        throw new Error(`Colldev did not found valid package.json`);
    }
}
export async function getPackageMainPath(): Promise<string> {
    const mainPathRelative = (await getPackageContent()).main;
    if (!mainPathRelative) {
        throw new Error(`Colldev did not found main entry in package.json`);
    }
    try {
        await promisify(access)(mainPathRelative, constants.R_OK);
    } catch (error) {
        console.error(error);
        throw new Error(`Colldev cannot acces main entry "${mainPathRelative}" defined in package.json`);
    }
    const mainPath = join(process.cwd(), mainPathRelative);
    return mainPath;
}

// TODO: Warn if project is not versioned by GIT
// TODO: !! Test version compatibility
