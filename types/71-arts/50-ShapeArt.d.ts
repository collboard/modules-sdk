// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { IFramable } from '../50-systems/ExportImportSystem/0-ExportSystem';
import { Abstract2dArt } from './26-Abstract2dArt';
export declare enum ShapeName {
    Rectange = 'Rectange',
    Circle = 'Circle',
    Line = 'Line',
    Triangle = 'Triangle',
    TriangleRight = 'TriangleRight',
}
export declare class ShapeArt extends Abstract2dArt implements IFramable {
    shape: ShapeName;
    color: string;
    weight: number;
    private privateSize;
    constructor(shape: ShapeName, color: string, weight: number, shift: IVector, privateSize: IVector);
    get topLeftCorner(): import('xyzt').IVectorObject;
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
