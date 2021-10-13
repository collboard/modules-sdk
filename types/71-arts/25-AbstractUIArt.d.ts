// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

/// <reference types="react" />
import { ISystemsExtended } from '../50-systems/00-SystemsContainer/ISystems';
import { ExtraJsxPlace } from '../50-systems/ExtraJsxSystem/0-ExtraJsxSystem';
import { AbstractArt } from './20-AbstractArt';
/**
 * AbstractUIArt is an abstract class providing functionality regarding
 * adding or removing components from UI
 *
 * @summary AbstractUIArt is not implemented within the system yet
 *
 * @collboard-modules-sdk
 */
export declare abstract class AbstractUIArt extends AbstractArt {
    extraJsxPlace: ExtraJsxPlace;
    constructor(extraJsxPlace: ExtraJsxPlace);
    abstract render(systems: ISystemsExtended): JSX.Element;
}
