// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Promisable } from 'type-fest';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IAttribute } from '../../AttributesSystem/IAttribute';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
export interface IAttributeProtoModule<T> {
    manifest: IModuleManifest;
    attribute: IAttribute;
    standard: boolean;
    inputRender(value: T, onChange: (value: T) => void, systems: ISystems): Promisable<JSX.Element>;
}
/**
 *
 * @collboard-modules-sdk
 */
export declare function makeAttributeModule<T>(protoModule: IAttributeProtoModule<T>): IModuleDefinition;
