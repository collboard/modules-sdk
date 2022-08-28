// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
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
