// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { string_char, string_char_emoji } from '../../40-utils/typeAliases';
import { string_icon } from './icons';
/**
 * Icon (visual) which can appear on toolbars, buttons,...
 * This interface just represents icon without context and placement
 * (vs. `IToolbarIcon`)
 *
 * @collboard-modules-sdk
 */
export interface IIconAnonymous {
    /**
     * Callback called when the icon is clicked
     *
     * *Note: Prefer to use onActivate when using IToolbarIcon*
     */
    onClick?: () => Promisable<void>;
    /**
     * Marks if the icon should appear selected
     */
    active?: boolean;
    /**
     * Marks if the icon should be unclickable
     * (also `onClick` does not get called when `true`)
     */
    inactive?: boolean;
    /**
     * Char which should be rendered instead of `icon`
     *
     * **`icon` xor `char` must be set**
     */
    char?: string_char | string_char_emoji;
    /**
     * Internal icon name which should appear on Icon
     *
     * @see string_icon
     *
     * **`icon` xor `char` must be set**
     */
    icon?: string_icon;
    /**
     * Optional class name which should be set on the icon
     */
    className?: string;
}
