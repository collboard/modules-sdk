// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { string_translate_language } from '../../../40-utils/typeAliases';
/**
 * A message which can be a simple string or a object with multiple string translations.
 *
 * @collboard-modules-sdk
 */
export declare type IStringMessage = string | Partial<Record<string_translate_language, string>>;
/**
 * A message which can be a simple string or JSX element*, or a complex object with multiple translations and rich elements.
 *
 * Note: Please use JSX element only as a text with a formatting like a <b>bold</b> or <i>italic</i> etc.
 *
 * @collboard-modules-sdk
 */
export declare type IMessage = IBaseMessage | Partial<Record<string_translate_language, IBaseMessage>>;
/**
 * A message which can be a simple string or JSX element*
 *
 * Note: Please use JSX element only as a text with a formatting like a <b>bold</b> or <i>italic</i> etc.
 *
 * @collboard-modules-sdk
 */
export declare type IBaseMessage = string | JSX.Element;
/**
 * TODO: Try to support IMessage instead of IBaseMessage across the repositiory
 */
