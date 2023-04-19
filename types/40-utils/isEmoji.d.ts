// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_char_emoji } from './typeAliasEmoji';
/**
 *
 * @param value some char
 * @returns true if value is emoji
 *
 * @collboard-modules-sdk
 */
export declare function isEmoji(value: string): value is string_char_emoji;
/**
 * Note: Not using only EMOJIS or EMOJIS_IN_CATEGORIES because there can be a new emoji in the future which wont be yet in our system
 * TODO: Some smarter way how to detect new emojis without listing them in EMOJIS
 */
