// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * HighOrderError is high order error to wrap lower order error (like parsing).
 * @see https://www.pavolhejny.com/rozsirene-informace-o-chybach/
 *
 * @deprecated use errorMessageWithAdditional instead
 *
 * @collboard-modules-sdk
 */
export declare class HighOrderError extends Error {
    readonly lowOrderError: Error;
    readonly highOrderExplanation: string;
    readonly name: string;
    constructor(lowOrderError: Error, highOrderExplanation: string);
}
