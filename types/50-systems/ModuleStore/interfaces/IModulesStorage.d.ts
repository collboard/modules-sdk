// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from 'touchcontroller';
import { string_module_name } from '../../../40-utils/typeAliases';
import { IModule, IModuleDefinition } from './IModule';
/**
 * IModulesStorage represents modules, which are already delcared in memory.
 * This is used for internal modules + modules in development by colldev
 *
 * TODO: Maybe split up between declareModule and modules part
 */
export interface IModulesStorage extends IDestroyable {
    declareModule(module: IModule): Promise<void>;
    /**
     * TODO: Maybe Map
     */
    readonly modules: Record<string_module_name, IModuleDefinition>;
}
