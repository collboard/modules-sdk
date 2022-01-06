// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * @collboard-modules-sdk
 */
export declare type IArrayable<T> = T | T[] | Set<T>;
/**
 *
 * @collboard-modules-sdk
 */
export declare function toArray<T>(input?: IArrayable<T> | string, delimiter?: string): T[];
