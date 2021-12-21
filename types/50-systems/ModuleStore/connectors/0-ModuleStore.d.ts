// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { string_module_category, string_module_name } from '../../../40-utils/typeAliases';
import { AbstractSystem } from '../../AbstractSystem';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleSearchCriteria } from '../interfaces/IModuleSearchCriteria';
import { IModulesStorageStrong } from '../interfaces/IModulesStorage';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
import { IModuleStoreConnectorSearchResult } from '../interfaces/IModuleStoreConnectorSearchResult';
/**
 * ModuleStore unites all module store connectors into one API, so consumer have same way how to get internal or external module
 *
 * Note: Modules storage - is just getter / setter for modules
 *       Modules store   - has full logic of mudules domain
 *
 * @collboard-system
 */
export declare class ModuleStore extends AbstractSystem implements IModuleStoreConnector {
    private connectors;
    /**
     * @proxy
     */
    getModule(name: string_module_name): IModuleDefinition | null;
    init(): Promise<void>;
    /**
     * Note: When searching with limit, it depends on order of connectors registration
     */
    registerModuleStoreConnector(modulesConnector: IModuleStoreConnector): IDestroyable;
    /**
     * Note: When searching with limit, it depends on order of connectors registration
     */
    registerModuleStorage(modulesStorage: IModulesStorageStrong): IDestroyable;
    search(searchCriteria: IModuleSearchCriteria): Promise<IModuleStoreConnectorSearchResult>;
    getCategories(): Promise<Set<string_module_category>>;
}
