// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IAwaitable, IDestroyable } from 'destroyable';
import { string_module_category } from '../../../40-utils/typeAliases';
import { IDependency } from './IDependencies';
import { IModule } from './IModule';
import { IModuleStoreConnectorSearchQuery, IModuleStoreConnectorSearchResult } from './IModuleStoreConnectorSearch';
/**
 * Connect to molules repository and pull modules from there
 *
 * @collboard-modules-sdk
 */
export interface IModuleStoreConnector extends IDestroyable {
    search(searchCriteria: IModuleStoreConnectorSearchQuery): IAwaitable<IModuleStoreConnectorSearchResult>;
    download(...modules: IDependency[]): IAwaitable<IModule[]>;
    getCategories(): Promise<Set<string_module_category>>;
}
