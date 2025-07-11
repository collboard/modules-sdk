// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_translate_name_not_normalized, string_url, string_url_image } from '../../../40-utils/typeAliases';
import { IMessage } from '../../TranslationsSystem/interfaces/IMessage';
export type IWelcomeTemplates = Array<{
    title: string_translate_name_not_normalized | IMessage;
    image: string_url_image;
    modulesOn?: string | Array<string>;
    modulesOff?: string | Array<string>;
    importAsMaterialize?: string_url;
}>;
