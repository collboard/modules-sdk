// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Promisable } from 'type-fest';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { UserInterfaceElementPlace } from '../../UserInterfaceSystem/UserInterfaceElementPlace';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest/IModuleManifest';
/**
 * Makes a module that will add any JSX element on requested place.
 *
 * Note: Making this type of module is not recommended because it is using very low-level API. Consider using higher-level API like makeModalModule, makeTrayToolModule, etc.
 *
 * @collboard-modules-sdk
 */
export declare function makeUserInterfaceModule(protoModule: {
    manifest?: IModuleManifest;
    place: UserInterfaceElementPlace;
    order?: number;
    createElement(systems: ISystems): Promisable<JSX.Element>;
}): IModuleDefinition;
/**
 * TODO: !!! Rename createElement to render (fulltext ACRY)
 */
