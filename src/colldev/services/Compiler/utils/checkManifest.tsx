import spaceTrim from 'spacetrim';
import { IModuleManifest } from '../../../../../types';

/**
 * Check module maniest validity and in case of error throw an error
 * @param manifest to be checked
 */
export async function checkManifest(manifest: IModuleManifest): Promise<void> {
    const MODULE_NAME_PATTERN = new RegExp('^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]*$');
    if (!MODULE_NAME_PATTERN.test(manifest.name)) {
        throw new Error(
            spaceTrim(`
                Invalid module name
                Module name has same restrictions as package name and should match the pattern of "${MODULE_NAME_PATTERN.source}"
            `),
        );
    }
}

/**
 * TODO:
 * Check that name has a scope
 * Check that name is not occupied by another module in same scope
 * How to return/throw multiple errors?
 */
