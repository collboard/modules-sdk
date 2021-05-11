// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { string_char, string_char_emoji } from '../../40-utils/typeAliases';
import { string_icon } from './icons';
/**
 * Icon (visual) which can appear on toolbars, buttons,... This interface just represents icon without context and placement (vs. IToolbarIcon)
 * TODO: !! Rename it to IIcon
 */
export interface IIconAnonymous {
    /**
     * Note: Prefer to use onActivate when using IToolbarIcon
     */
    onClick?: () => void;
    active?: boolean;
    inactive?: boolean;
    char?: string_char | string_char_emoji;
    icon?: string_icon;
    className?: string;
}
