// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_css } from '../../typeAliases';
import { ICss } from './ICss';
/**
 * Stringifies css object into css string.
 *
 * @param css {ICss} css in form of object.
 * @returns string with css.
 * @example {'.bar': {border: '1px'}} => '.bar{border: 1px}'
 * @example {'.bar': {border: '1px'}, '.foo': {border: '2px'}} => '.bar{border: 1px} .foo{border: 2px}' =>
 * @example {'.bar': {border: '1px', padding: '13px'}} => '.bar{border: 1px; padding: 13px}'
 * @collboard-modules-sdk
 */
export declare function stringifyStyles(css: ICss): string_css;
