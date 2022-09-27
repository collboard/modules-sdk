// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IBaseMessage } from '../../50-systems/TranslationsSystem/interfaces/IMessage';
import { string_html } from '../typeAliases';
/**
 * Converts jsx to simple provisional html without using react-dom
 *
 * Note: There are functions:
 *    - **jsxToHtml** uses react-dom to render the jsx to html
 *    - **jsxToHtmlSimple** does not use react-dom to render the jsx to html and it tryes to extract essential information from the jsx
 *    @see ./jsxToHtml.test.tsx vs. ./jsxToHtmlSimple.test.tsx
 *
 * @param element JSX element
 * @returns html string
 *
 * @collboard-modules-sdk
 */
export declare function jsxToHtmlSimple(element?: IBaseMessage): string_html;
/**
 * TODO: Probably just use ReactDOMServer.renderToStaticMarkup
 */
