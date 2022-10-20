// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { number_percent, number_positive_integer } from '../../typeAliases';
/**
 * Converts RGB values to HSL values
 *
 * @param red [0-255]
 * @param green [0-255]
 * @param blue [0-255]
 * @returns [hue, saturation, lightness] [0-1]
 *
 * @not-collboard-modules-sdk Use Color object for conversion instead
 */
export declare function rgbToHsl(
    red: number_positive_integer,
    green: number_positive_integer,
    blue: number_positive_integer,
): [number_percent, number_percent, number_percent];
/**
 * TODO: Name propperly all used internal variabiles
 */
