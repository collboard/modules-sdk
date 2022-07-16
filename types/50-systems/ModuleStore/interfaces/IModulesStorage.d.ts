// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { Observable } from 'rxjs';
import { string_module_name, string_version_dependency } from '../../../40-utils/typeAliases';
import { IModule, IModuleDefinition } from './IModule';
/**
 * IModulesStorageWeak represents object that can return IModuleDefinition from name.
 * This module definition can be already stored in the memory (for this is used IModulesStorageStrong) or created ad-hod from the name (this is used for external modules)
 *
 * Note: Modules storage - is just getter / setter for modules
 *       Modules store   - has full logic of mudules domain
 */
export interface IModulesStorageWeak {
    getModule(name: string_module_name, version?: string_version_dependency): IModuleDefinition | null;
}
/**
 * IModulesStorageStrong represents modules, which are already delcared in memory.
 * This is used for internal modules + modules in development by colldev
 *
 * Note: Modules storage - is just getter / setter for modules
 *       Modules store   - has full logic of mudules domain
 */
export interface IModulesStorageStrong extends IModulesStorageWeak, IDestroyable {
    getAllModules(): Array<IModuleDefinition>;
    observeAllModules(): Observable<Array<IModuleDefinition>>;
    declareModule(module: IModule): Promise<void>;
}
/**
 * TODO: Undeclaring modules in IModulesStorageStrong
 */
