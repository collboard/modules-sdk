// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVectorData, Vector } from 'xyzt';
import { Abstract2dArt } from '../26-Abstract2dArt';
import { string_color } from './../../40-utils/typeAliases';
import { ISystems } from './../../50-systems/00-SystemsContainer/ISystems';
import { IListStyle } from './interfaces/IListStyle';
/**
 * @collboard-modules-sdk
 */
export declare class TextArt extends Abstract2dArt {
    content: string;
    color: string_color;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    listStyle: IListStyle;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    constructor(
        content: string,
        color: string_color,
        fontSize: number,
        bold: boolean,
        italic: boolean,
        underline: boolean,
        listStyle: IListStyle,
    );
    /**
     * This is for backwards compatibility
     *
     * TODO: Is this working?
     * https://collboard.com/aubppdztrgbwa3uyvqu2
     *
     */
    set point1(point1: IVectorData);
    private __size;
    get size(): Vector;
    get topLeftCorner(): IVectorData;
    get bottomRightCorner(): Vector;
    isNear(pointToTest: IVectorData): boolean;
    get acceptedAttributes(): string[];
    render(/* @deprecated */ isSelected: boolean, systems: ISystems): Promise<JSX.Element>;
}
/**
 * TODO: [🍒] Every Art should look like this + what do render method here should do RenderSystem OR ArtSchell OR sth. like that
 */
