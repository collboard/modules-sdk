// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_version } from './40-utils/typeAliases';
export declare const clientVersion: string_version;
export declare const PUBLIC_URL: string;
/**
 * Conversion table from misc units to board pixels
 *
 * @collboard-modules-sdk
 * @deprecated Make ScaleSystem instead
 */
export declare const SCALE_PIXELS: {
    field: number;
    centimeter: number;
    kilometer: number;
    earths: number;
    AU: number;
};
/**
 * @deprecated integrate into StyleSystem
 */
export declare const DRAWING_COLORS: {
    [key: string]: string;
};
export declare const DEBUG_CSS = false;
export declare const DEBUG_CSS_RULE: string;
/**
 * Matches a Collboard module name
 *
 * For examples of valid/invalid names:
 *     @see https://regex101.com/r/oDVYWA/1
 *     @see /src/40-utils/parseModuleName.test.ts
 *
 * @collboard-modules-sdk
 */
export declare const MODULE_NAME_PATTERN: RegExp;
/**
 * How much maximum notifications should be shown at one time
 *
 * @collboard-modules-sdk
 */
export declare const SHOW_MAXIMUM_NOTIFICATION = 2;
