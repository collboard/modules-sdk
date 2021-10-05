// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { Abstract2dBoxArt } from './27-Abstract2dBoxArt';
/**
 * Art rendering a given HTML content
 *
 * **Warning: HTML is dangerously set inside a div element, please sanitize the
 * content of any malicious scripts before creating art!**
 *
 * @collboard-modules-sdk
 */
export declare class HTMLArt extends Abstract2dBoxArt {
    content: string;
    /**
     * @param content HTML content as string
     */
    constructor(content: string);
    defaultZIndex: number;
    renderBox(): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
