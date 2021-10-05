// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Vector } from 'xyzt';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
export declare function makeTrayToolModule<TArt extends Abstract2dArt>(protoModule: {
    manifest?: IModuleManifest;
    getSelectedItemId: () => string | null;
    isMouseOverToolbar: () => boolean;
    newArtMaker: (id: string, position: Vector) => TArt;
    getToolbarBodyRef: () => HTMLDivElement | null;
}): IModuleDefinition;
