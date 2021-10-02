// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { MaterialArtVersioningSystem } from './0-MaterialArtVersioningSystem';
import { IArtVersioningSystem } from './IArtVersionSystem';
/**
 * TODO: VirtualArtVersioningSystem should be a bit les capable then MaterialArtVersioningSystem because it can for example cannot handle persisting (@see IFreshMaterialOperation vs IFreshOperation)
 * TODO: Virtual art operations shoud not require persisting
 * TODO: Virtual art operations should not prevent closing (maybe just canBeClosed always true or completelly not IClosePreventable)
 *
 * @collboard-system
 */
export declare class VirtualArtVersioningSystem
    extends MaterialArtVersioningSystem
    implements IDestroyable, IArtVersioningSystem {}
