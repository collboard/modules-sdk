// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_css, string_html } from '../../typeAliases';
interface IInsertStyleIntoHtmlOptions {
    html: string_html;
    css: string_css;
}
/**
 * Insert style into html.
 *  - If there is <html> structure it inserts into <head>
 *  - If there is <svg> structure it inserts before </svg>
 *  - If there is no <html> structure it inserts at the end of the document
 *
 * @collboard-modules-sdk
 */
export declare function insertStyleIntoHtml({ html, css }: IInsertStyleIntoHtmlOptions): string_html;
export { };
/**
 * TODO: [🎞️] Probbably work with XMLs in some object-based method
 */
