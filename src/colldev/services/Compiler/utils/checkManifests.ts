import { IModuleManifest } from '../../../../../types';
import { parsePackageName } from '../../../utils/parsePackageName';
import { checkManifest } from './checkManifest';
import { isEveryItemDifferent } from './isEveryItemDifferent';
import { isEveryItemSame } from './isEveryItemSame';

/**
 * Check module maniests validity and they consistency as a whole
 * In case of error throw an error
 * @param manifests to be checked
 */
export async function checkManifests(...manifests: IModuleManifest[]): Promise<void> {
    if (manifests.length === 0) {
        throw new Error('Expecting at least one module');
    }

    for (const manifest of manifests) {
        await checkManifest(manifest);
    }

    const namesAndScopes = manifests.map((manifest) =>
        parsePackageName({ packageName: manifest.name, requireScope: true }),
    );

    const names = namesAndScopes.map(({ name }) => name);
    const scopes = namesAndScopes.map(({ scope }) => scope);

    if (!isEveryItemSame(...scopes)) {
        throw new Error('All modules must have the same scope');
    }

    if (!isEveryItemDifferent(...names)) {
        throw new Error('All modules must have different names');
    }
}

/**
 * TODO: Check more interoperability things
 * TODO: Check against server
 */
