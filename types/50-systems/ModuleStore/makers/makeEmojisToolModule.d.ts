// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
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
