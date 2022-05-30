// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ArrayFull } from './typeHelpers';
/**
 * Converts a string pattern with "*" to a regular expression
 * It can take multiple patterns and will return a union of all patterns in the form of a regular expression
 *
 * @param pattern The pattern to convert to a regular expression; for example "image/*"
 * @returns RegExp; for example /^image\/.*$/
 *
 * @collboard-modules-sdk
 */
export declare function patternToRegExp(...patterns: ArrayFull<string>): RegExp;
