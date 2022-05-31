// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { BoundingBox, IVectorData } from 'xyzt';
import { IFramable } from '../50-systems/ExportSystem/interfaces/IFramable';
import { Abstract2dBoxArt } from './27-Abstract2dBoxArt';
/**
 * Frame for export
 *
 * @collboard-modules-sdk
 */
export declare class FrameArt extends Abstract2dBoxArt implements IFramable {
    title: string;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    get boundingBox(): BoundingBox;
    /**
     * @param src Iframe source
     * @param title Iframe title (alt)
     */
    constructor(size: IVectorData, title: string);
    renderBox(): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 * TODO: Pick on borders + one corner
 */
