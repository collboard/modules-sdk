// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable, IDestroyable } from 'destroyable';
import { BehaviorSubject } from 'rxjs';
import { IModule, IModuleDefinition } from '../interfaces/IModule';
import { IModulesStorage } from '../interfaces/IModulesStorage';
export declare class ModulesStorage extends Destroyable implements IModulesStorage, IDestroyable {
    readonly modules: BehaviorSubject<Record<string, IModuleDefinition>>;
    declareModule(module: IModule): Promise<void>;
    destroy(): Promise<void>;
}
