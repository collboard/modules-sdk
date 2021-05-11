// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from '../../../40-utils/destroyables/IDestroyable';
import { IAwaitable } from '../../../40-utils/IAwaitable';
import { IFactorable, IFactory } from '../../../40-utils/IFactory';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IModuleManifest } from './IModuleManifest';
/**
 *  Note: We cannot use just a function setup as and module because than we cannot distinguish between factory of full module and just setup
 */
export declare type IModule = IFactorable<IModuleDefinition>;
export declare type IModuleFactory = IFactory<IModuleDefinition>;
export interface IModuleDefinition {
    manifest?: IModuleManifest;
    setup: IModuleSetup;
}
export declare type IModuleSetup = (systems: ISystems) => IAwaitable<IDestroyable>;
