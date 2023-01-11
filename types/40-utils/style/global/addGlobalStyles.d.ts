// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_html } from '../../typeAliases';
/**
 * Adds styles to given html document
 * It recieves html document which is not styled but contains references (classes, ids) to styles which are not there.
 * This function will find all styles used in current page and add them to the given document inlined.
 *
 * @param html without <style> but with elements need to be styled
 * @returns html with <style>
 * @sideeffect Not pure - reads from window.document all the style elements
 */
export declare function addGlobalStyles(html: string_html): Promise<string_html>;
/**
 * TODO: [Optimization][InitialLoading] Optimize this for initial loading
 * TODO: [🐾] Optimize HTML native export
 */
