
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IFactorable } from '../../../40-utils/IFactory';
import { IModule, IModuleFactory } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * Takes an array of of modules (or just a setup functions) and create a composition module from it.
 * This is usefull if you want to use some maker with some custom functionality
 * Manifest is either given or it will be taken from the first non-anonymous module or returned module will be anonymous
 * @returns a factory (not definition) which will dynamically makes multimodule again and again because only this can ensure one run per one instance policy.
 *
 * @collboard SDK
 */
export declare function makeMultiModule(modulesOrProtomodule: {
    manifest?: IModuleManifest;
    modules: IFactorable<IModule[]>;
} | IFactorable<IModule[]>): IModuleFactory;

                  