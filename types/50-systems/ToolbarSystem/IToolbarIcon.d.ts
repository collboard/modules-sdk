// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IIconAnonymous } from '../../30-components/menu/IIconAnonymous';
import { IDestroyable } from '../../40-utils/destroyables/IDestroyable';
import { IAwaitable } from '../../40-utils/IAwaitable';
import { IFactory } from '../../40-utils/IFactory';
import { string_css_cursor } from '../../40-utils/typeAliases';
import { IShortcut } from '../ShortcutsSystem/interfaces/IShortcut';
/**
 * Icon placed on the toolbar with listeners (vs. IIconAnonymous without context)
 */
export interface IToolbarIcon extends IIconAnonymous {
    /**
     * This can be used for identification when selecting externally by selectIcon
     */
    name?: string;
    /**
     * This will be called when icon is selected and expect to return registration which will be destroyed when user unselects
     * When this is defined, icon on toolbar is selectable.
     * Note: Prefer to use onActivate instead of onClick
     */
    onSelect?: IFactory<IAwaitable<IDestroyable>>;
    /**
     * Select immediatelly when is ihis icon added into toolbar
     * Note: working only with onSelect (not onClick)
     */
    autoSelect?: boolean;
    /**
     * Where the icon will be on the toolbar
     * Note: section has a priorit
     *
     * @default 0
     */
    order?: number;
    /**
     * Focus scope represent type of focus that is taken by one think in an app.
     *
     * @default "tools"
     */
    focusScope?: string;
    /**
     * This represents section seperated by | in the toolbar
     *
     * @default 0
     */
    section?: number;
    /**
     * This shortcut will be automatically registered in shortcut system
     */
    shortcut?: IShortcut;
    boardCursor?: string_css_cursor;
    /**
     * Extra menu which will be
     */
    menu?: () => JSX.Element;
}
