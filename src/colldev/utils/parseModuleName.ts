import spaceTrim from 'spacetrim';
import { string_module_name } from '../../../types';
import { MODULE_NAME_PATTERN } from '../config';

/**
 * Parse Collboard module name
 * @see more in MODULE_NAME_REGEX
 *
 * @param moduleName
 * @returns normalized scope and name
 *
 * @copy of @see https://github.com/collboard/collboard/blob/main/src/40-utils/parseModuleName.ts
 */
export function parseModuleName(moduleName: string_module_name): {
    scope: string;
    name: Array<string>;
} {
    const match = MODULE_NAME_PATTERN.exec(moduleName);

    if (!match?.groups) {
        throw new Error(
            spaceTrim(`
                Invalid module name "${moduleName}"
                Module name must be in format "@scope/name"
                Module name must match /${MODULE_NAME_PATTERN.source}/
            `),
        );
    }

    const { scope, name } = match.groups;

    return { scope, name: name.split('/') };
}
