// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { Promisable } from 'type-fest';
import { string_module_category } from '../../../40-utils/typeAliases';
import { IModulesStorage } from './IModulesStorage';
import { IModuleSearchCriteria } from './IModuleSearchCriteria';
import { IModuleStoreConnectorSearchResult } from './IModuleStoreConnectorSearchResult';
/**
 * Connect to molules repository and pull modules from there
 *
 * @collboard-modules-sdk
 */
export interface IModuleStoreConnector extends IDestroyable {
    moduleStorage: IModulesStorage;
    search(searchCriteria: IModuleSearchCriteria): Promisable<IModuleStoreConnectorSearchResult>;
    getCategories(): Promise<Set<string_module_category>>;
}
