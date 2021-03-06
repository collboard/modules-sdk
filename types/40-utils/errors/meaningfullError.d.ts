// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { Factory } from '../IFactory';
/**
 * This util catches an error and rethrows more meaningfull error message to better debugging
 * TODO: More oprions how to handle and rewrap the error - for example by a function
 *
 * @collboard-modules-sdk
 */
export declare function meaningfullError<T>(valueFactory: Factory<Promisable<T>>, errorMessage: string): Promise<T>;
