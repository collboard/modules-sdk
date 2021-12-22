// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { BusinessSystem } from '../../BusinessSystem/0-BusinessSystem';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * Has this module finished its profile in manifest so it will be presented in the store
 * @param manifest of the module
 * @param installer which will be asked if this module is installed and if yes, module will be presented
 * @returns whether module should be shown publically or not (be hidden to user)
 */
export declare function isPresented(manifest: IModuleManifest, businessSystem?: BusinessSystem): boolean;
/**
 *  TODO:  Unit test
 */
