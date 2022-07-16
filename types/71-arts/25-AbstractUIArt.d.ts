// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { ISystemsExtended } from '../50-systems/00-SystemsContainer/ISystems';
import { UserInterfaceElementPlace } from '../50-systems/UserInterfaceSystem/UserInterfaceElementPlace';
import { AbstractArt } from './20-AbstractArt';
/**
 * AbstractUIArt is an abstract class providing functionality regarding
 * adding or removing components from UI
 *
 * @summary AbstractUIArt is not implemented within the system yet
 *
 * @collboard-modules-sdk
 */
export declare abstract class AbstractUserInterfaceArt extends AbstractArt {
    userInterfaceElementPlace: UserInterfaceElementPlace;
    constructor(userInterfaceElementPlace: UserInterfaceElementPlace);
    abstract render(systems: ISystemsExtended): JSX.Element;
}
