// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Split an array into subarrays using the specified separator and return them as an array of arrays.
 * @param array An array that will be splitted in chunks
 * @param splitter An item that can split a array.
 * @param limit A value used to limit the number of elements returned in the array.
 *
 * @collboard-modules-sdk
 */
export declare function splitArray<T>(array: T[], splitter: T, limit?: number): T[][];
