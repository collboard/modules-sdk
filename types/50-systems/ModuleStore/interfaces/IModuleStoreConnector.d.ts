// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IAwaitable } from '../../../40-utils/IAwaitable';
import { string_module_category } from '../../../40-utils/typeAliases';
import { IDependency } from './IDependencies';
import { IModule } from './IModule';
import { IModuleStoreConnectorSearchQuery, IModuleStoreConnectorSearchResult } from './IModuleStoreConnectorSearch';
/**
 * Connect to molules repository and pull modules from there
 * TODO: Maybe destroyable
 */
export interface IModuleStoreConnector {
    search(searchCriteria: IModuleStoreConnectorSearchQuery): IAwaitable<IModuleStoreConnectorSearchResult>;
    download(...modules: IDependency[]): IAwaitable<IModule[]>;
    getCategories(): Promise<Set<string_module_category>>;
}
