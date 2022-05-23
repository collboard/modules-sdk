// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable, IDestroyable } from 'destroyable';
import { ISystems } from '../00-SystemsContainer/ISystems';
import { IModule, IModuleDefinition } from './interfaces/IModule';
/**
 * This represents one installation of one module.
 */
export declare class ModuleInstallation extends Destroyable implements IDestroyable {
    readonly moduleDefinition: IModuleDefinition;
    readonly registration: IDestroyable;
    private readonly syncerName?;
    static install(module: IModule, systems: ISystems, syncerName?: string): Promise<ModuleInstallation>;
    private constructor();
    destroy(): Promise<void>;
}
/**
 * TODO: [🏄‍♂️] Wait till all modules are installed
 */
