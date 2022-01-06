// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import * as React from 'react';
import { IVector, Vector } from 'xyzt';
import { Abstract2dArt } from './26-Abstract2dArt';
export declare type IListStyle = 'unordered' | 'ordered' | 'none';
export declare class TextArt extends Abstract2dArt {
    content: string;
    color: string;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    listStyle: IListStyle;
    point1: IVector;
    static serializeName: string;
    private textInput;
    private tempText;
    constructor(
        content: string,
        color: string,
        fontSize: number,
        bold: boolean,
        italic: boolean,
        underline: boolean,
        listStyle: IListStyle,
        point1: IVector,
    );
    get size(): Vector;
    get topLeftCorner(): Vector;
    get bottomRightCorner(): Vector;
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): string[];
    setTempText(): void;
    renderTextField(onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void): JSX.Element;
    render(/* TODO: ✨ Add is prefix */ selected: boolean): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
