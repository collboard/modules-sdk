// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

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
