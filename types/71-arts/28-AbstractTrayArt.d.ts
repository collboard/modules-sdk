// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Vector } from 'xyzt';
import { ITrayDynamicDefinition } from '../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Abstract2dBoxArt } from './27-Abstract2dBoxArt';
/**
 * @collboard-modules-sdk
 */
export declare abstract class AbstractTrayArt extends Abstract2dBoxArt {
    itemId: string;
    shift: Vector;
    color: string;
    defaultZIndex: number;
    abstract getDefinition(): ITrayDynamicDefinition;
    constructor(itemId: string, shift: Vector);
    private init;
    private get isValid();
    get acceptedAttributes(): string[];
    renderBox(): JSX.Element;
}
