// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData, Vector } from 'xyzt';
/**
 * @deprecated this should be using LIB xyzt boundingBox
 */
export type square = {
    topLeft: Vector;
    bottomRight: Vector;
};
/**
 * @deprecated this should be using LIB xyzt boundingBox
 */
export declare function pointsToSquare(point1: IVectorData, point2: IVectorData): square;
