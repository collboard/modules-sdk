import { join } from 'path';

export function getColldevPackagePath(): string {
    const packagePath = join(__dirname, '../../../../package.json');
    return packagePath;
}
