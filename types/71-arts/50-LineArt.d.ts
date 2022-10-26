// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData } from 'xyzt';
import { number_positive, string_color } from './../40-utils/typeAliases';
import { ShapeArt } from './50-ShapeArt';
/**
 *
 * @collboard-modules-sdk
 */
export declare class LineArt extends ShapeArt {
    color: string_color;
    weight: 0 | number_positive;
    point2: IVectorData;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    constructor(color: string_color, weight: 0 | number_positive, point1: IVectorData, point2: IVectorData);
}
/**
 * TODO: [🚉] There should be some rounding optimization for svg numbers (for example path)
 *       From: d="M60.00000000000006 70.4999999999999 L60.00000000000006 70.4999999999999...
 *       To:   d="M60 70.5 L60 70.5...
 *
 * TODO: [🍎]  Use IMaterial instead of color
 * TODO: [🍎]  Use IShape instead of weight, points,...
 * TODO: [🕺] Rename weight => spotSize, edgeSize (as it is in PolygonArt and FreehandArt)
 * TODO: [🎚️] Implement IArt
 * Note: [🌡️]
 */
