// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Factorable } from '../../../40-utils/IFactory';
import { IModule, IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest/IModuleManifest';
/**
 * Takes an array of of modules (or just a setup functions) and create a composition module from it.
 * This is usefull if you want to use some maker with some custom functionality
 * Manifest is either given or it will be taken from the first non-anonymous module or returned module will be anonymous
 * @returns a factory (not definition) which will dynamically makes multimodule again and again because only this can ensure one run per one instance policy.
 *
 * @collboard-modules-sdk
 */
export declare function makeMultiModule(
    modulesOrProtomodule:
        | {
              manifest?: IModuleManifest;
              modules: Factorable<Array<IModule>>;
          }
        | Factorable<Array<IModule>>,
): IModuleDefinition;
