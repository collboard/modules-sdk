import { join } from 'path';


export function getModulePackageJsonPath(workingDir: string): string {
    const packageJsonPath = join(process.cwd(), workingDir, 'package.json');
    return packageJsonPath;
}
