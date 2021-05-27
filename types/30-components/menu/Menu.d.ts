// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
/**
 * @collboard-modules-sdk
 */
interface IMenuProps extends React.PropsWithChildren<{}> {
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
}
/**
 * Menu component
 *
 * @collboard-modules-sdk
 */
export declare function Menu({ orientation, className, onClick, children }: IMenuProps): JSX.Element;
export {};
