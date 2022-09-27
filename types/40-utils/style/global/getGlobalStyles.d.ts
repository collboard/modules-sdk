// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_css } from '../../typeAliases';
/**
 * Parses styled components styles from html
 *
 * @returns CSS styles as a string
 * @sideeffect Not pure - reads from window.document style elements
 * @collboard-modules-sdk
 */
export declare function getGlobalStyles(): string_css;
/**
 * Note: Originally this was a function parseGlobalStyles which used css-tree to parse css but it is unnecessary and too heavy so it was transformed to getGlobalStyles
 *       Last commit with this is a0d06c564cee94f9d7b88de59f7d3067149d9a65
 */
