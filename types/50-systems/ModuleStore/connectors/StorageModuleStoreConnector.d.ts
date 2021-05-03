
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { string_module_category } from '../../../40-utils/typeAliases';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IDependency } from '../interfaces/IDependencies';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModulesStorage } from '../interfaces/IModulesStorage';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
import { IModuleStoreConnectorSearchQuery } from '../interfaces/IModuleStoreConnectorSearch';
/**
 * StorageModuleStoreConnector searches through IModulesStorage modules (which are already delcared in memory).
 * This is used for internal modules + modules in development by colldev
 */
export declare class StorageModuleStoreConnector implements IModuleStoreConnector {
    private systems;
    private modulesStorage;
    constructor(systems: ISystems, modulesStorage: Pick<IModulesStorage, 'modules'>);
    download(...identificators: IDependency[]): Promise<IModuleDefinition[]>;
    getCategories(): Promise<Set<string_module_category>>;
    search(searchCriteria: IModuleStoreConnectorSearchQuery): Promise<{
        modules: import("../interfaces/IModuleManifest").IModuleManifest[];
    }>;
}

                  