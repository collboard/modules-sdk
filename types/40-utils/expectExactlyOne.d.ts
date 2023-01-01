// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Checks if the given array has exactly one item.
 *    If yes, returns the item.
 *    If less, throws an error.
 *    If more, logs a warning and returns the first item.
 *
 * @param array - the array to check
 * @returns the only item
 */
export declare function expectExactlyOne<TItem>(
    what: string | undefined,
    array: Array<TItem>,
    additional: Record<string, any>,
): TItem;
