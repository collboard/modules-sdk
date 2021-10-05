// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

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
