// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { ISerializeRule } from 'everstorage';
import { AbstractArt } from '../../../71-arts/20-AbstractArt';
import { IModule, IModuleDefinition } from '../interfaces/IModule';
export declare const artModules: Array<
    IModule & {
        artSerializeRule: ISerializeRule<any>;
    }
>;
/**
 * makeArtModule will make UI module
 *
 * Note: Module still needs to be declared
 * @collboard-modules-sdk
 */
export declare function makeArtModule(artSerializeRule: ISerializeRule<AbstractArt>): IModuleDefinition;
