// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_html } from '../typeAliases';
/**
 * Adds styles to given html document.
 *
 * @param html without <style> but with elements need to be styled
 * @returns html with <style>
 * @sideeffect Not pure - reads from window.document all the style elements
 */
export declare function addStyles(html: string_html): string_html;
