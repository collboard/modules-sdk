// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
/**
 * @collboard-modules-sdk
 */
interface IMenuProps {
    /**
     * Menu orientation
     *
     * Possible values:
     * - `"horizontal"` (horizontal left to right)
     * - `"vertical"` (vertical top to bottom)
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Icons or other dedicated menu components
     */
    children: Array<JSX.Element | false> | JSX.Element;
    /**
     * Aditional class name set on the menu component
     */
    className?: string;
}
/**
 * Menu component
 *
 * @collboard-modules-sdk
 */
export declare function Menu(props: IMenuProps): JSX.Element;
export {};
