// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Vector } from 'xyzt';
export type ISvgPath = Array<ISvgPathSegment>;
export interface ISvgPathSegment {
    command: ISvgPathSegmentCommand;
    positions: Array<Vector>;
}
/**
 * Here is a brief explanation of what each command does:
 * - "M" or "m" - moveto command, used to move the current position of the cursor to a new location.
 * - "L" or "l" - lineto command, used to draw a straight line from the current position to a new location.
 * - "H" or "h" - horizontal lineto command, used to draw a horizontal line from the current position to a new location.
 * - "V" or "v" - vertical lineto command, used to draw a vertical line from the current position to a new location.
 * - "C" or "c" - curveto command, used to draw a cubic Bézier curve from the current position to a new location.
 * - "S" or "s" - shorthand/smooth curveto command, used to draw a smooth cubic Bézier curve from the current position to a new location.
 * - "Q" or "q" - quadratic Bézier curve command, used to draw a quadratic Bézier curve from the current position to a new location.
 * - "T" or "t" - shorthand/smooth quadratic Bézier curveto command, used to draw a smooth quadratic Bézier curve from the current position to a new location.
 * - "A" or "a" - elliptical arc command, used to draw an elliptical arc from the current position to a new location.
 * - "Z" or "z" - closepath command, used to close the current path.
 *
 * Note: Please note that these commands are case sensitive, so "M" and "m" are different commands.
 */
export type ISvgPathSegmentCommand =
    | 'M'
    | 'm'
    | 'L'
    | 'l'
    | 'H'
    | 'h'
    | 'V'
    | 'v'
    | 'C'
    | 'c'
    | 'S'
    | 's'
    | 'Q'
    | 'q'
    | 'T'
    | 't'
    | 'A'
    | 'a'
    | 'Z'
    | 'z';
/**
 * TODO: Maybe do one of:
 *       - Use more optimal relative commands M->m, L->l, C->c,... (Probably do with ISvgPathSegmentAbsolute => ISvgPathSegment,ISvgPathSegmentRelative)
 *       - ISvgPathSegment - Maybe use only one of (l vs L), (m vs M)... and also remember last position + no need to distinguish between l and m (index === 0 ? 'M' : 'L')
 */
