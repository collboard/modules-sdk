
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { Vector } from 'xyzt';
import { IModuleDefinition } from '../../../../50-systems/ModuleStore/interfaces/IModule';
import { IModuleManifest } from '../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
import { Abstract2dArt } from '../../../../71-arts/26-Abstract2dArt';
export declare function makeTrayToolModule<Art extends Abstract2dArt>(protoModule: {
    manifest?: IModuleManifest;
    getSelectedItemId: () => string | null;
    isMouseOverToolbar: () => boolean;
    newArtMaker: (id: string, position: Vector) => Art;
    getToolbarBodyRef: () => HTMLDivElement | null;
}): IModuleDefinition;

                  