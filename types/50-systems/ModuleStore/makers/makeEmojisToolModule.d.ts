// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * Makes toolbar icon module which setup/unsetup given submodule when user select/unselect icon
 * TODO: Probbably better name (makeIconModuleOnModule vs. makeIconModuleOnRoute)
 *
 * @collboard-modules-sdk
 */
export declare function makeEmojisToolModule(protoModule: {
    manifest: IModuleManifest;
    fontSizeRange: {
        min: number;
        max: number;
    };
    placeFrequency: number;
    emojis: string[];
}): IModuleDefinition;
