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
/**
 * IModulesStorage represents modules, which are already delcared in memory.
 * This is used for internal modules + modules in development by colldev
 *
 *
 */
export interface IModulesStorage extends IDestroyable {
    declareModule(module: IModule): Promise<void>;
    readonly modules: BehaviorSubject<Record<string_module_name, IModuleDefinition>>;
}
/**
 *
 * TODO: Maybe split up between declareModule and modules part
 * TODO: Undeclaring modules
 * TODO: Maybe modules Map not Record
 *
 */
