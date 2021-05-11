// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { string_url_image } from '../40-utils/typeAliases';
import { Abstract2dBoxArt } from './27-Abstract2dBoxArt';
/**
 * @collboard-modules-sdk
 */
export declare class ImageArt extends Abstract2dBoxArt {
    src: string_url_image;
    alt: string;
    constructor(src: string_url_image, alt: string);
    renderBox(): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
