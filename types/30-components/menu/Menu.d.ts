// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
/**
 * @collboard-modules-sdk
 */
declare type IMenuProps = React.PropsWithChildren<{
    /**
     * Menu orientation
     *
     * Possible values:
     * - `"horizontal"` (horizontal left to right)
     * - `"vertical"` (vertical top to bottom)
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Aditional class name set on the menu component
     */
    className?: string;
    onClick?: React.MouseEventHandler<any>;
}>;
/**
 * Menu component
 *
 * @collboard-modules-sdk
 */
export declare function Menu({ orientation, className, onClick, children }: IMenuProps): JSX.Element;
export { };
