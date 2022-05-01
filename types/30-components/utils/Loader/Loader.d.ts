// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
/**
 * TODO: Put all %c styled console logs styles into one config place
 */
export declare const LOADING_CONSOLE_WARN_STYLE =
    'background: #ffff22; color: black; font-size: 1.1em; font-weight: bold; padding: 5px; border-radius: 3px;';
export interface ILoaderProps {
    /**
     * Describe what is loading
     * It is sorta like a alt for the image as a text for immediate synchronous use
     */
    alt: string;
    /**
     * Should be content loaded quickly or it is ok to show loader for long period of time
     * - If FALSE warning will be shown after some time
     * - If TRUE nothing will happen
     */
    canLoadForever?: boolean;
}
/**
 * @collboard-modules-sdk
 */
export declare function Loader({ alt, canLoadForever }: ILoaderProps): JSX.Element;
