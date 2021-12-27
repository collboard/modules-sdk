// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IJson } from 'everstorage';
import { string_attribute, string_module_category } from '../../../40-utils/typeAliases';
/**
 * Represents a query to modules repository
 *
 * @collboard-modules-sdk
 */
export interface IModuleSearchCriteria extends IJson {
    needle?: string;
    category?: string_module_category;
    supports?: {
        art?: string;
        attribute?: string_attribute;
    };
    limit?: number;
}
/**
 * TODOs:
 * - Searching author
 * - Combinating - AND and OR (combination of supports)
 * - How to deal with standard and bonus attribute modules - now it searches only through standard ones
 */