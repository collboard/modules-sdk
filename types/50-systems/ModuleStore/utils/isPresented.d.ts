// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IModuleManifest } from '../interfaces/IModuleManifest';
import { CornerstoneSyncer } from '../Syncers/CornerstoneSyncer';
/**
 * Has this module finished its profile in manifest so it will be presented in the store
 * @param manifest of the module
 * @param cornerstoneSyncer which will be asked if this module is installed and if yes, module will be presented (TODO: maybe optional)
 * @returns whether module should be shown publically or not (be hidden to user)
 */
export declare function isPresented(manifest: IModuleManifest, cornerstoneSyncer: CornerstoneSyncer): boolean;
