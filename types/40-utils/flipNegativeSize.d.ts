// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData, Vector } from 'xyzt';
interface IFlipNegativeSizeValue<T extends IVectorData> {
    translate: T;
    size: T;
}
/**
 * Flip negative size values to positive and change according to it translate
 * Or preserves both size and translate when size is positive
 * If there is only one axis negative, it will be flipped and positive axis will be preserved
 *
 * @collboard-modules-sdk
 */
export declare function flipNegativeSize({
    translate,
    size,
}: IFlipNegativeSizeValue<IVectorData>): IFlipNegativeSizeValue<Vector>;
export {};
