// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { BehaviorSubject } from 'rxjs';
import { string_module_name } from '../../../40-utils/typeAliases';
import { IModule, IModuleDefinition } from './IModule';
export interface IModulesStorage extends IDestroyable {
    readonly modules: BehaviorSubject<Record<string_module_name, IModuleDefinition>>;
}
export interface IModulesStorageWithDeclare extends IModulesStorage {
    declareModule(module: IModule): Promise<void>;
}
/**
 * TODO: !!! Anotate - store vs storage
 * TODO: Undeclaring modules
 * TODO: Maybe modules Map not Record
 *
 */
/**
 * IModulesStorage represents modules, which are already delcared in memory.
 * This is used for internal modules + modules in development by colldev
 *
 *
 */
