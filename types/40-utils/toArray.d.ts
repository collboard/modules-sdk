// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ArrayFull, IArrayable, IArrayableFull } from './typeHelpers';
/**
 *
 * @collboard-modules-sdk
 */
export declare function toArray<T>(input?: IArrayableFull<T> | string, delimiter?: string): ArrayFull<T>;
export declare function toArray<T>(input?: IArrayable<T> | string, delimiter?: string): Array<T>;
