// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Promisable } from 'type-fest';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { ExtraJsxPlace } from '../../ExtraJsxSystem/0-ExtraJsxSystem';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 *
 * @collboard-modules-sdk
 */
export declare function makeExtrajsxModule(protoModule: {
    manifest?: IModuleManifest;
    place: ExtraJsxPlace;
    order?: number;
    createExtraJsx(systems: ISystems): Promisable<JSX.Element>;
}): IModuleDefinition;
