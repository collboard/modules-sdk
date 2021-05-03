
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * @collboard SDK
 */
export declare class LineArt extends Abstract2dArt {
    color: string;
    weight: number;
    point2: IVector;
    constructor(color: string, weight: number, point1: IVector, point2: IVector);
    get topLeftCorner(): Vector;
    get bottomRightCorner(): Vector;
    get size(): IVector;
    set size(newSize: IVector);
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): string[];
    render(selected: boolean): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */

                  