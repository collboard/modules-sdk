// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
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
    static serializeName: string;
    static manifest: {
        name: string;
    };
    /**
     * @param content HTML content as string
     * @param scale rescale after measuring
     */
    constructor(content: string, scale?: number);
    defaultZIndex: number;
    renderBox(): JSX.Element;
}
