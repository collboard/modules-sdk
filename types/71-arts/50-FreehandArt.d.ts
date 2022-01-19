// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { TouchFrame } from 'touchcontroller';
import { IVectorData, Vector } from 'xyzt';
import { Abstract2dArt } from './26-Abstract2dArt';
export declare const SVG_PADDING = 10;
/**
 * @collboard-modules-sdk
 */
export declare class FreehandArt extends Abstract2dArt {
    static serializeName: string;
    static manifest: {
        name: string;
    };
    frames: TouchFrame[];
    color: string;
    weight: number;
    private minX;
    private maxX;
    private minY;
    private maxY;
    constructor(frames: TouchFrame[], color: string, weight: number);
    private get path();
    get topLeftCorner(): Vector;
    get bottomRightCorner(): Vector;
    get size(): IVectorData;
    set size(newSize: IVectorData);
    isNear(point2: IVectorData): boolean;
    get acceptedAttributes(): string[];
    private calculateBoundingBox;
    render(/* TODO: ✨ Add is prefix */ selected: boolean): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
