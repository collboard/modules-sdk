// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_html } from './../../../../40-utils/typeAliases';
/**
 * Sanitize HTML
 *
 * @param html dirty html from user (or parter apps like H-edu)
 * @returns clean html to be used in HTMLArt
 *
 * @collboard-modules-sdk
 */
export declare function sanitizeHtml(html: string_html): string_html;
/**
 * TODO: Where should be this file - it is definetelly util which can be under src/40-utils/jsx-html BUT is also used only here in @collboard/html-import
 */
