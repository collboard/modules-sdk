// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVectorData, Vector } from 'xyzt';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
import { IListStyle } from '../../../71-arts/50-TextArt';
/**
 * Note: this component is now unused but it is usefull for testing the transform so do not delete it
 */
export declare class TextCardArt extends Abstract2dArt {
    content: string;
    color: string;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    listStyle: IListStyle;
    point1: IVectorData;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    constructor(
        content: string,
        color: string,
        fontSize: number,
        bold: boolean,
        italic: boolean,
        underline: boolean,
        listStyle: IListStyle,
        point1: IVectorData,
    );
    get size(): Vector;
    get topLeftCorner(): Vector;
    get bottomRightCorner(): Vector;
    isNear(point2: IVectorData): boolean;
    get acceptedAttributes(): string[];
    render(/* TODO: ✨ Add is prefix */ selected: boolean): JSX.Element;
}
