// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData } from 'xyzt';
import { ShapeArt } from './50-ShapeArt';
/**
 *
 * @collboard-modules-sdk
 */
export declare class LineArt extends ShapeArt {
    color: string;
    weight: number;
    point2: IVectorData;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    constructor(color: string, weight: number, point1: IVectorData, point2: IVectorData);
}
/**
 * Note: Number is just a file prefix to feep it on the top of file list.
 */
