// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { string_html, string_xml } from '../typeAliases';
/**
 * Renders jsx to html / xml
 *
 * Note: There are functions:
 *    - **jsxToHtml** uses react-dom to render the jsx to html
 *    - **jsxToHtmlSimple** does not use react-dom to render the jsx to html and it tryes to extract essential information from the js
 *    @see ./jsxToHtml.test.tsx vs. ./jsxToHtmlSimple.test.tsx
 *
 * @param element JSX element
 * @returns html string
 *
 * @collboard-modules-sdk
 */
export declare function jsxToHtml(jsx: JSX.Element): string_xml | string_html;
/**
 * TODO: Formatting is not working on large (exported) SVGs - It is not fatal but it returns one lined string
 * TODO: [🎞️] Probbably work with XMLs in some object-based method
 * TODO: [🐾] Optimize HTML native export
 */
