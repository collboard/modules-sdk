import spaceTrim from 'spacetrim';
import { IModuleManifest } from '../../../../../types';
import { parseModuleName } from '../../../utils/parseModuleName';
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

    const namesAndScopes = manifests.map((manifest) => parseModuleName(manifest.name));

    if (!isEveryItemSame(...namesAndScopes.map(({ scope }) => scope))) {
        throw new Error('All modules must have the same scope');
    }

    if (!isEveryItemDifferent(...namesAndScopes.map(({ name }) => name.join('-')))) {
        // TODO: Add name collision into error message
        throw new Error('All modules must have different names');
    }

    if (!isEveryItemSame(...manifests.map(({ version }) => version))) {
        throw new Error(
            spaceTrim(`
                All modules must have same version
                Note: If you want to publish two modules with indipendent versioning, use two different packages
            `),
        );
    }
}

/**
 * TODO: Check more interoperability things
 * TODO: Check against server
 */
