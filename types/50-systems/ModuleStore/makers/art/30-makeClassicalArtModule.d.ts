// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IInstantiable } from '../../../ArtSerializer/interfaces/IInstantiable';
import { IModuleDefinition } from '../../interfaces/IModule';
import { IModuleManifest } from '../../interfaces/IModuleManifest/IModuleManifest';
/**
 * @@x
 * makeClassicalArtModule will make UI module
 *
 * Note: Module still needs to be declared
 * @deprecated please use makeFunctionalArtModule
 * @collboard-modules-sdk
 */
export declare function makeClassicalArtModule(
    artClass: IInstantiable & {
        /**
         * Name which is unique for each art
         * 💡 Tip: Best practise is to name it same as the class name without "Art" suffix
         */
        serializeName: string;
        manifest: IModuleManifest;
    },
): IModuleDefinition;
