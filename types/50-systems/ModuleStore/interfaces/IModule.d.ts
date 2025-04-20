// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { Promisable } from 'type-fest';
import { Factorable } from '../../../40-utils/IFactory';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IModuleManifest } from './IModuleManifest/IModuleManifest';
/**
 * Collboard module is basic unit of functionality. From the technical point of view it is just an object or function which will create this object with manifest and setup function that can make some work and returns a logic how to destroy itself.
 *
 * It can be in two forms:
 * 1) **IModuleDefinition** which will directly contain setup and optionally the manifest @see IModuleDefinition
 * 2) Or function that will return IModuleDefinition. This can be usefull to create unique scope before calling the setup.
 *    When the module is uninstalled and than installed again, this factory will be called again so you do not need to think about some complicated scenarios.
 *    Notice that this factory should not do some heavy work or keep something to destroy. Purpose of it is only to define scope variabliles. Heavy work should be done in the setup.
 *
 * Note: We cannot use just a function setup as and module because than we cannot distinguish between factory of full module and just setup
 *
 * @collboard-modules-sdk
 */
export type IModule = Factorable<IModuleDefinition>;
/**
 * Collboard module is basic unit of functionality. From the technical point of view it is just an object with manifest and setup function that can make some work and returns a logic how to destroy itself.
 *
 * @collboard-modules-sdk
 */
export interface IModuleDefinition {
    /**
     * Profile of the module
     * If you not provide the manifest, module will be private. It will not be visible in the module store.
     *
     * Also you can make multimodules and module without manifest can be the submodule and whole bundle can have a manifest.
     */
    manifest?: IModuleManifest;
    /**
     * Logic of the module
     */
    setup: IModuleSetup;
}
/**
 * Setup is an function that is called when the modules is going to be installed. When the function result is resolved, module is succesfully installed.
 * In the setup should be done all heavy work. Typically you will interact with the systems. You will get systems container and you can request the systems at begining of the setup. Systems are like APIs.
 * Setup should return destroyable object which will cleanup everything after it. In most cases you can just return things from the systems because they are most of the time returning exactly that.
 *
 * @collboard-modules-sdk
 */
export type IModuleSetup = (systems: ISystems) => Promisable<IDestroyable>;
