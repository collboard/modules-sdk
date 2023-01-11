// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_html, string_xml } from '../typeAliases';
/**
 * Make given HTML XML valid
 *
 * It will do:
 * - Automatically end the tags like <img> to <img/>, <link> to <link/>,...
 * - Add <!DOCTYPE html> doctype of the html
 * - Add <?xml version="1.0" encoding="UTF-8"?> doctype of the svg
 * - Automatically end all unended tags
 *
 * @param element HTML or SVG string which can be invalid
 * @returns HTML or SVG string which is also valid XML string
 *
 * @collboard-modules-sdk
 */
export declare function htmlToXmlValidHtml(html: string_html): string_html & string_xml;
/**
 * TODO: [🎞️] Probbably work with XMLs in some object-based method
 */
