// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { string_translate_language } from './typeAliases';
/**
 * This represents a message whic can be a simple string, or a complex object with multiple translations and rich elements.
 */
export declare type IMessage = IBaseMessage | Partial<Record<string_translate_language, IBaseMessage>>;
export declare type IBaseMessage = string | JSX.Element;
