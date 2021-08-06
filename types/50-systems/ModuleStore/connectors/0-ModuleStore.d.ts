// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from 'destroyable';
import { string_module_category } from '../../../40-utils/typeAliases';
import { AbstractSystem } from '../../AbstractSystem';
import { IDependency } from '../interfaces/IDependencies';
import { IModulesStorage } from '../interfaces/IModulesStorage';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
import { IModuleStoreConnectorSearchQuery } from '../interfaces/IModuleStoreConnectorSearch';
/**
 * ModuleStore unites all module store connectors into one API, so consumer have same way how to get internal or external module
 *
 * @collboard-system
 */
export declare class ModuleStore extends AbstractSystem implements IModuleStoreConnector {
    private connectors;
    init(): Promise<void>;
    registerModuleStoreConnector(modulesConnector: IModuleStoreConnector): IDestroyable;
    registerModuleStorage(modulesStorage: Pick<IModulesStorage, 'modules'>): IDestroyable;
    search(
        searchCriteria: IModuleStoreConnectorSearchQuery,
    ): Promise<{
        modules: (IDependency & Partial<import('../interfaces/IModuleManifest').IModuleManifest>)[];
    }>;
    download(
        ...modules: IDependency[]
    ): Promise<import('../../../CollboardSdk').IFactorable<import('../interfaces/IModule').IModuleDefinition>[]>;
    getCategories(): Promise<Set<string_module_category>>;
}
