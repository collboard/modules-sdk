// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
interface IFilterWithLimitOptions<T> {
    array: Array<T>;
    limit: number;
    predicate: (value: T, index?: number, array?: Array<T>) => boolean;
}
/**
 * Filter array with limit and predicate
 *
 * @deprecated Extend Array prototype instead
 * @collboard-modules-sdk
 */
export declare function filterWithLimit<T>({ array, limit, predicate }: IFilterWithLimitOptions<T>): Array<T>;
export {};
