// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ICss } from '../css-object/ICss';
/**
 * Parses global styles from html.
 * It extract styles from:
 *    - Everything inlined inside <style> tag
 *    - Everything which <link> tag refers to
 *
 * @returns
 * @sideeffect Not pure - reads from window.document all the style elements
 * @collboard-modules-sdk
 */
export declare function parseGlobalStyles(): Promise<ICss>;
/**
 * TODO: [🌱] In future we should parse every css but for now parsing whole css with parseStyles and parseGlobalStyles is too slow and heavy
 */
