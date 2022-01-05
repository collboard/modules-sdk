// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable } from 'destroyable';
import { string_module_category, string_module_name } from '../../../40-utils/typeAliases';
import { ISystemsExtended } from '../../00-SystemsContainer/ISystems';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleSearchCriteria } from '../interfaces/IModuleSearchCriteria';
import { IModulesStorageStrong } from '../interfaces/IModulesStorage';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
import { IModuleStoreConnectorSearchResult } from '../interfaces/IModuleStoreConnectorSearchResult';
/**
 * StorageModuleStoreConnector searches through IModulesStorage modules (which are already delcared in memory).
 * This is used for internal modules + modules in development by colldev
 */
export declare class StorageModuleStoreConnector extends Destroyable implements IModuleStoreConnector {
    private systems;
    private readonly moduleStorage;
    constructor(systems: ISystemsExtended, moduleStorage: IModulesStorageStrong);
    /**
     *
     * @proxy
     */
    getModule(name: string_module_name): IModuleDefinition | null;
    getCategories(): Promise<Set<string_module_category>>;
    search(searchCriteria: IModuleSearchCriteria): Promise<IModuleStoreConnectorSearchResult>;
}
