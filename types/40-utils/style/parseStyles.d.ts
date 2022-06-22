// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_css, string_css_selector } from '../typeAliases';
/**
 * !!
 *
 * @param css
 * @returns
 */
export declare function parseStyles(css: string_css): Array<{
    selector: string_css_selector;
    rules: string_css;
}>;
