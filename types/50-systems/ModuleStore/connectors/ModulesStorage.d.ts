// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable, IDestroyable } from 'destroyable';
import { Observable } from 'rxjs';
import { string_module_name } from '../../../40-utils/typeAliases';
import { IModule, IModuleDefinition } from '../interfaces/IModule';
import { IModulesStorageStrong } from '../interfaces/IModulesStorage';
export declare class ModulesStorage extends Destroyable implements IModulesStorageStrong, IDestroyable {
    private readonly modulesObservable;
    private modules;
    getModule(name: string_module_name): IModuleDefinition | null;
    getAllModules(): Array<IModuleDefinition>;
    observeAllModules(): Observable<Array<IModuleDefinition>>;
    declareModule(...modules: Array<IModule>): Promise<void>;
    private declareOneModule;
    destroy(): Promise<void>;
}
