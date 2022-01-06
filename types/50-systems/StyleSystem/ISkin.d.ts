// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { CSSProperties } from 'react';
import { Color } from '../../40-utils/color/Color';
import { string_color } from '../../40-utils/typeAliases';
/**
 * Configuration of the skin
 *
 * @collboard-modules-sdk
 */
export interface ISkin {
    welcomeWallpaper?: CSSProperties;
    borderRadius: number;
    colors: {
        primary: Color | string_color;
        light: Color | string_color;
        dark: Color | string_color;
        danger: Color | string_color;
        success: Color | string_color;
        white: Color | string_color;
        black: Color | string_color;
        overlay: Color | string_color;
    };
    darken: number;
    lighten: number;
    circles: boolean;
}
