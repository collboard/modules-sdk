// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { Color } from './../../../40-utils/color/Color';
interface IHandwrittenCollboardLogoProps {
    /**
     * If true, testing background will be shown
     */
    isTesting?: boolean;
    /**
     * TODO: [LogoDesign] Remove
     * If true, there will be shown only "Collb"
     */
    isCropped?: boolean;
    color: Color;
    height: number;
    weight: number;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<SVGElement>;
}
export declare function HandwrittenCollboardLogo(props: IHandwrittenCollboardLogoProps): JSX.Element;
export {};
/**
 * TODO: Use dynamic id instead of "logo-gradient"
 * TODO: Maybe accept material (basics are set by <defs>)
 *       And behave like Art
 * TODO: Maybe put here image from assets folder
 *       Also remove old logos from assets folder (like logo-small.png)
 * TODO: Naming system for logo - place, color, size (small ), format, .com, icon,...
 * TODO: Put alt in SVG
 *       OR maybe use <figure or <picture @see https://css-tricks.com/accessible-svgs/
 */
