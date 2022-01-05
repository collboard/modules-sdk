// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { string_url_image } from '../40-utils/typeAliases';
import { Abstract2dBoxArt } from './27-Abstract2dBoxArt';
/**
 * Art rendering a given image
 *
 * @collboard-modules-sdk
 */
export declare class ImageArt extends Abstract2dBoxArt {
    src: string_url_image;
    alt: string;
    static serializeName: string;
    /**
     * @param src Image source
     * @param alt Image alt text
     */
    constructor(src: string_url_image, alt: string);
    renderBox(): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
