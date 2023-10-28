// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import {
    string_translate_language,
    string_translate_name,
    string_translate_name_not_normalized,
} from '../../../40-utils/typeAliases';
export interface ITranslateMessage {
    name: string_translate_name;
    nameNN: string_translate_name_not_normalized;
    language: string_translate_language;
    message: string;
    isAutomaticTranslation: boolean;
    note?: string;
}
