// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData, Vector } from 'xyzt';
interface IFitInsideOptions {
    objectSize: IVectorData;
    containerSize: IVectorData;
    isUpscaling?: boolean;
}
/**
 * Fits object with objectSize inside of container with containerSize.
 * It preserves objectSize ratio
 *
 */
export declare function fitInside({ objectSize, containerSize, isUpscaling }: IFitInsideOptions): Vector;
export {};
/**
 * TODO: This util should be part of xyzt
 */
