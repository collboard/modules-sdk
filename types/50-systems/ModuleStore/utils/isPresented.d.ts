// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IInstaller } from '../interfaces/IInstaller';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * Has this module finished its profile in manifest so it will be presented in the store
 * @param manifest of the module
 * @param installer which will be asked if this module is installed and if yes, module will be presented
 * @returns whether module should be shown publically or not (be hidden to user)
 */
export declare function isPresented(manifest: IModuleManifest, installer: IInstaller): boolean;
