// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { IVectorData, Vector } from 'xyzt';
import { Abstract2dArt } from './26-Abstract2dArt';
export declare type IListStyle = 'unordered' | 'ordered' | 'none';
/**
 * @collboard-modules-sdk
 */
export declare class TextArt extends Abstract2dArt {
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
        point1: IVectorData,
    );
    get size(): Vector;
    get topLeftCorner(): Vector;
    get bottomRightCorner(): Vector;
    isNear(point2: IVectorData): boolean;
    get acceptedAttributes(): string[];
    setTempText(): void;
    renderTextField(onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void): JSX.Element;
    render(isSelected: boolean): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
