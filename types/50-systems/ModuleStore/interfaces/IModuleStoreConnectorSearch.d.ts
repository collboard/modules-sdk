// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IJson } from 'everstorage';
import { string_attribute, string_module_category } from '../../../40-utils/typeAliases';
import { IDependency } from './IDependencies';
import { IModuleManifest } from './IModuleManifest';
/**
 * Represents a query to modules repository
 *
 * @collboard-modules-sdk
 */
export interface IModuleStoreConnectorSearchQuery extends IJson {
    needle?: string;
    category?: string_module_category;
    supports?: {
        art?: string | any;
        attribute?: string_attribute;
    };
}
/**
 * Represents a result from modules repository
 *
 * @collboard-modules-sdk
 */
export interface IModuleStoreConnectorSearchResult {
    modules: Array<IDependency & Partial<IModuleManifest>>;
}
