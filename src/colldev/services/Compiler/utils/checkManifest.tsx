import spaceTrim from 'spacetrim';
import { IModuleManifest } from '../../../../../types';
import { parsePackageName } from '../../../utils/parsePackageName';

/**
 * Check module maniest validity and in case of error throw an error
 * @param manifest to be checked
 */
export async function checkManifest(manifest: IModuleManifest): Promise<void> {
    // Note: It will throw an error if the package name is not valid
    parsePackageName({ packageName: manifest.name, requireScope: true });

    if (!manifest.version) {
        throw new Error('Module must have defined version');
    }

    if (!/^v?(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$/.test(manifest.version)) {
        throw new Error(
            spaceTrim(`
                Version must be a valid semantic version string
                "${manifest.version}" is not valid semantic version string
            `),
        );
    }
}
