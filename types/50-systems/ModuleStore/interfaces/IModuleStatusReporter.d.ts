// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { BehaviorSubject } from 'rxjs';
import { ModuleStatus } from '../ModuleStatus';
import { IModuleManifest } from './IModuleManifest';
/**
 * IModuleStatusReporter can tell if the module is installed or not
 *
 * @collboard-modules-sdk
 *
 */
export interface IModuleStatusReporter extends IDestroyable {
    statusOf(moduleManifest: IModuleManifest): BehaviorSubject<ModuleStatus>;
}
