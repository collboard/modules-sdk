// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Converts hsl arry
 *
 * @collboard-modules-sdk
 */
import { number_integer, number_percent, number_positive } from '../../typeAliases';
/**
 * Converts HSL values to RGB values
 *
 * @param hue [0-1]
 * @param saturation [0-1]
 * @param lightness [0-1]
 * @returns [red, green, blue] [0-255]
 *
 * @not-collboard-modules-sdk Use Color object for conversion instead
 */
export declare function hslToRgb(
    hue: number_percent,
    saturation: number_percent,
    lightness: number_percent,
): [number_positive & number_integer, number_positive & number_integer, number_positive & number_integer];
/**
 * TODO: Name propperly all used internal variabiles
 */
