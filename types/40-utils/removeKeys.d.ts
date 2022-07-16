// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Remove given keys from the recieved options array.
 * Note: It does not mutate recieved object
 *
 * @param options
 * @param keys
 * @returns stripped object
 *
 * @collboard-modules-sdk
 */
export declare function removeKeys<TObject, TRemove extends keyof TObject>(
    options: TObject,
    keys: Array<TRemove>,
): Omit<TObject, TRemove>;
