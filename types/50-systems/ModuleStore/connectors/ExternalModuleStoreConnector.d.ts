// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { string_module_category } from '../../../40-utils/typeAliases';
import { IDependency } from '../interfaces/IDependencies';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
import { IModuleStoreConnectorSearchQuery } from '../interfaces/IModuleStoreConnectorSearch';
/**
 * ExternalModuleStoreConnector communicates with the server via API and downloads modules from there
 */
export declare class ExternalModuleStoreConnector implements IModuleStoreConnector {
    search(
        searchCriteria: IModuleStoreConnectorSearchQuery,
    ): Promise<{
        modules: never[];
    }>;
    download(...modules: IDependency[]): Promise<never[]>;
    getCategories(): Promise<Set<string_module_category>>;
}
