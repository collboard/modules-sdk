// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { string_module_category } from '../../../40-utils/typeAliases';
import { AbstractSystem } from '../../AbstractSystem';
import { IModuleSearchCriteria } from '../interfaces/IModuleSearchCriteria';
import { IModulesStorage } from '../interfaces/IModulesStorage';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
import { ModulesStorage } from './ModulesStorage';
/**
 * ModuleStore unites all module store connectors into one API, so consumer have same way how to get internal or external module
 *
 * @collboard-system
 */
export declare class ModuleStore extends AbstractSystem implements IModuleStoreConnector {
    private connectors;
    get moduleStorage(): ModulesStorage;
    init(): Promise<void>;
    registerModuleStoreConnector(modulesConnector: IModuleStoreConnector): IDestroyable;
    registerModuleStorage(modulesStorage: IModulesStorage): IDestroyable;
    search(searchCriteria: IModuleSearchCriteria): Promise<{
        manifests: import('../interfaces/IModuleManifest').IModuleManifest[];
    }>;
    getCategories(): Promise<Set<string_module_category>>;
}
