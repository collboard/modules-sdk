// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IVector } from 'xyzt';
import { Abstract2dArt } from './26-Abstract2dArt';
export declare enum ExportFormat {
    Native = 'NATIVE',
    Png = 'PNG',
}
/**
 * ExportArt is art for exporting content from the board.
 */
export declare class ExportArt extends Abstract2dArt {
    format: ExportFormat;
    constructor(format: ExportFormat);
    get topLeftCorner(): import('xyzt').IVectorObject;
    get bottomRightCorner(): import('xyzt').IVectorObject;
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): never[];
    render(selected: boolean): null;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
