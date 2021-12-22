// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

/// <reference types="react" />
import { string_translate_language } from '../../40-utils/typeAliases';
export interface ITranslateMessagePicker {
    pickMessage(messageTranslation: string | Partial<Record<string_translate_language, string>>): string;
    pickMessageJsx(
        messageTranslation: string | JSX.Element | Partial<Record<string_translate_language, string | JSX.Element>>,
    ): JSX.Element;
}
