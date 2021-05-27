// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Vector } from 'xyzt';
import { Abstract2dArt } from '../../../CollboardSdk';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
export declare function makeTrayToolModule<Art extends Abstract2dArt>(protoModule: {
    manifest?: IModuleManifest;
    getSelectedItemId: () => string | null;
    isMouseOverToolbar: () => boolean;
    newArtMaker: (id: string, position: Vector) => Art;
    getToolbarBodyRef: () => HTMLDivElement | null;
}): IModuleDefinition;
