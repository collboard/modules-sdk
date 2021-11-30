import { join } from 'path';


export function getModulePackagePath(workingDir: string): string {
    const packagePath = join(process.cwd(), workingDir, 'package.json');
    return packagePath;
}
