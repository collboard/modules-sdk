// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Vector } from 'xyzt';
import { string_char } from './../../../../40-utils/typeAliases';
export declare type ISvgPath = Array<ISvgPathSegment>;
export interface ISvgPathSegment {
    command: string_char;
    positions: Array<Vector>;
}
/**
 * TODO: Maybe do one of:
 *       - Use more optimal relative commands M->m, L->l, C->c,... (Probably do with ISvgPathSegmentAbsolute => ISvgPathSegment,ISvgPathSegmentRelative)
 *       - ISvgPathSegment - Maybe use only one of (l vs L), (m vs M)... and also remember last position + no need to distinguish between l and m (index === 0 ? 'M' : 'L')
 */
