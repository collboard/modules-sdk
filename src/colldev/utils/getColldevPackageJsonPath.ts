import { join } from 'path';

export function getColldevPackageJsonPath(): string {
    const packageJsonPath = join(__dirname, '../../../package.json');
    return packageJsonPath;
}
