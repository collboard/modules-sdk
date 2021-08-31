// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import {
    string_translate_language,
    string_translate_name,
    string_translate_name_not_normalized,
} from './0-TranslationsSystem';
export interface ITranslateMessage {
    name: string_translate_name;
    nameNN: string_translate_name_not_normalized;
    language: string_translate_language;
    message: string;
    note?: string;
}
