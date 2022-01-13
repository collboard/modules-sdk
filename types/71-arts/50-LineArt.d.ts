// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * @collboard-modules-sdk
 */
export declare class LineArt extends Abstract2dArt {
    color: string;
    weight: number;
    point2: IVector;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    constructor(color: string, weight: number, point1: IVector, point2: IVector);
    get topLeftCorner(): Vector;
    get bottomRightCorner(): Vector;
    get size(): IVector;
    set size(newSize: IVector);
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): string[];
    render(/* TODO: ✨ Add is prefix */ selected: boolean): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
