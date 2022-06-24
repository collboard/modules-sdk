// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_css_selector, string_html } from '../../typeAliases';
/**
 * Extract all used selectors from html.
 * It extract selectors:
 *  - from class attributes
 *  - from id attributes
 *
 * @param html - html to extract selectors from.
 * @returns Set with all used selectors
 *
 * @collboard-modules-sdk
 */
export declare function extractUsedSelectorsFromHtml(html: string_html): Set<string_css_selector>;
/**
 * TODO: [🎞️] Probbably work with XMLs in some object-based method
 */
