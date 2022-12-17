// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVectorData, Vector } from 'xyzt';
import { number_positive, string_color } from './../40-utils/typeAliases';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * @collboard-modules-sdk
 */
export declare enum ShapeName {
    Rectange = 'Rectange',
    Circle = 'Circle',
    Line = 'Line',
    Triangle = 'Triangle',
    TriangleRight = 'TriangleRight',
}
/**
 * @collboard-modules-sdk
 */
export declare class ShapeArt extends Abstract2dArt {
    shape: ShapeName;
    color: string_color;
    weight: 0 | number_positive;
    private privateSize;
    static serializeName: string;
    static manifest: {
        name: string;
        deprecatedNames: string;
    };
    constructor(
        shape: ShapeName,
        color: string_color,
        weight: 0 | number_positive,
        shift: IVectorData,
        privateSize: IVectorData,
    );
    get topLeft(): Vector;
    get bottomRight(): Vector;
    get size(): IVectorData;
    set size(newSize: IVectorData);
    isNear(pointToTest: IVectorData): boolean;
    get acceptedAttributes(): string[];
    render(isSelected: boolean): JSX.Element;
    private renderShape;
}
/**
 * TODO: [🍎]  Use IMaterial instead of color
 * TODO: [🍎]  Use IShape instead of weight, points,...
 * TODO: [🕺] Rename weight => spotSize, edgeSize (as it is in PolygonArt and FreehandArt)
 * TODO: [🚉] There should be some rounding optimization for svg numbers (for example path)
 *       From: d="M60.00000000000006 70.4999999999999 L60.00000000000006 70.4999999999999...
 *       To:   d="M60 70.5 L60 70.5...
 * TODO: [🎚️] Implement IArt
 */
