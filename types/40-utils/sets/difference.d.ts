// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Create difference set of two sets.
 *
 * @collboard-modules-sdk
 */
export declare function difference<TItem>(
    a: Set<TItem>,
    b: Set<TItem>,
    isEqual?: (a: TItem, b: TItem) => boolean,
): Set<TItem>;
