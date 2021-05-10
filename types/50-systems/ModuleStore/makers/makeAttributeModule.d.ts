
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IAttribute } from '../../AttributesSystem/IAttribute';
import { IAttributeRule } from '../../AttributesSystem/IAttributeRule';
import { IModule, IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
export declare const standardAttributeModules: Array<IModule & {
    attribute: IAttribute;
}>;
/**
 *
 * @collboard-modules-sdk
 */
export declare function makeAttributeModule<T>(protoModule: Omit<IAttributeRule<T>, 'moduleName'> & {
    manifest: IModuleManifest;
}): IModuleDefinition;

                  