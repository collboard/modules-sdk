// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { TouchFrame } from 'touchcontroller';
import { IVector, Vector } from 'xyzt';
import { Abstract2dArt } from './26-Abstract2dArt';
export declare const SVG_PADDING = 10;
/**
 * @collboard-modules-sdk
 */
export declare class FreehandArt extends Abstract2dArt {
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
    get size(): IVector;
    set size(newSize: IVector);
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): string[];
    private calculateBoundingBox;
    render(selected: boolean): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
