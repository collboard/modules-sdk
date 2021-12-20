import { IModuleManifest } from '../../../../../types';
import { parsePackageName } from '../../../utils/parsePackageName';
import { checkManifest } from './checkManifest';

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

    if (!isEveryItemDifferent(...names)) {
        throw new Error('All modules must have different names');
    }

    if (!isEveryItemSame(...scopes)) {
        throw new Error('All modules must have the same scope');
    }
}

/**
 * TODO: Check more interoperability things
 */

function isEveryItemDifferent<T>(...values: T[]): boolean {
    const set = new Set(values);
    return set.size === values.length;
}

function isEveryItemSame<T>(...values: T[]): boolean {
    const set = new Set(values);
    return set.size === 1;
}
