// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable } from '../../../40-utils/destroyables/Destroyable';
import { IDestroyable } from '../../../40-utils/destroyables/IDestroyable';
import { string_module_name } from '../../../40-utils/typeAliases';
import { IModule, IModuleDefinition } from '../interfaces/IModule';
import { IModulesStorage } from '../interfaces/IModulesStorage';
export declare class ModulesStorage extends Destroyable implements IModulesStorage, IDestroyable {
    readonly modules: Record<string_module_name, IModuleDefinition>;
    declareModule(module: IModule): Promise<void>;
    destroy(): Promise<void>;
}
