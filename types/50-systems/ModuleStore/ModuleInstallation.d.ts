// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable, IDestroyable } from 'destroyable';
import { ISystems } from '../00-SystemsContainer/ISystems';
import { IModule, IModuleDefinition } from './interfaces/IModule';
/**
 * This represents one installation of one module.
 */
export declare class ModuleInstallation extends Destroyable implements IDestroyable {
    readonly moduleDefinition: IModuleDefinition;
    readonly registration: IDestroyable;
    static install(module: IModule, systems: ISystems, syncerName?: string): Promise<ModuleInstallation>;
    private constructor();
    destroy(): Promise<void>;
}
