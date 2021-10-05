// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IVector, Vector } from 'xyzt';
/**
 * @deprecated this should be using xyzt BoundingBox
 */
export declare type square = {
    topLeftCorner: Vector;
    bottomRightCorner: Vector;
};
/**
 * @deprecated this should be using xyzt BoundingBox
 */
export declare function pointsToSquare(point1: IVector, point2: IVector): square;
