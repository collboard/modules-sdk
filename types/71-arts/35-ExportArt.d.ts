
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IVector } from 'xyzt';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * @collboard SDK
 */
export declare enum ExportFormat {
    Native = "NATIVE",
    Png = "PNG"
}
/**
 * ExportArt is art for exporting content from the board.
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 *
 * @collboard SDK
 */
export declare class ExportArt extends Abstract2dArt {
    format: ExportFormat;
    constructor(format: ExportFormat);
    get topLeftCorner(): import("xyzt").IVectorObject;
    get bottomRightCorner(): import("xyzt").IVectorObject;
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): never[];
    render(selected: boolean): null;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */

                  