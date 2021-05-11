// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
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
    createExtraJsx(systemsContainer: ISystems): JSX.Element;
}): IModuleDefinition;
