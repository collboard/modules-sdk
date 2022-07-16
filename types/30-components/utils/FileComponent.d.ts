// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
interface IFileComponentProps {
    /**
     * Shown file
     */
    file: File | Blob;
    /**
     * Is currently loading
     */
    isLoading?: boolean;
    /**
     * Images can be shown in <img> tag but if you set this to true, they will be shown in <iframe> tag.
     * @default false
     */
    isIframeEnforced?: boolean;
}
/**
 * Preview component of any file
 *
 * @collboard-modules-sdk
 */
export declare function FileComponent({ file, isLoading, isIframeEnforced }: IFileComponentProps): JSX.Element;
export {};
/**
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 * TODO: Move to external LIB
 */
