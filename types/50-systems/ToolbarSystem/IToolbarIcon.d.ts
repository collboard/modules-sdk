// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IDestroyable } from 'destroyable';
import { Promisable } from 'type-fest';
import { IIconAnonymous } from '../../30-components/menu/IIconAnonymous';
import { Factorable, Factory } from '../../40-utils/IFactory';
import { string_css_cursor } from '../../40-utils/typeAliases';
import { IShortcut } from '../ControlSystem/interfaces/IShortcut';
import { FocusScopeName } from '../FocusSystem/0-FocusSystem';
/**
 * Icon placed on the toolbar with listeners (vs. IIconAnonymous without context)
 */
export interface IToolbarIcon extends IIconAnonymous {
    /**
     * This can be used for identification when selecting externally by selectIcon
     */
    name?: string;
    /**
     * This will be called when icon is selected and expect to return registration which will be isDestroyed when user unselects
     * When this is defined, icon on toolbar is selectable.
     * Note: Prefer to use onActivate instead of onClick
     */
    onSelect?: Factory<Promisable<IDestroyable>>;
    /**
     * Select immediatelly when is ihis icon added into toolbar
     * Note: working only with onSelect (not onClick)
     *
     * @default true
     *
     *  TODO: [✨] Maybe add is prefix
     */
    autoSelect?: boolean;
    /**
     * If user click on icon when it is selected should it be unselected
     * Note: working only with onSelect (not onClick)
     *
     * TODO: [✨] Maybe add is prefix
     */
    togglable?: boolean;
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
     * 1) You can use enum **FocusScopeName** to pick from common focus scopes
     * 2) Or you can define your own by your own unique **string**
     * 3) And if you will use **null** it will be behaving as its own unique scope
     *
     * @default "TOOL"
     */
    focusScopeName?: FocusScopeName | string | null;
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
    boardCursor?: string_css_cursor | string;
    /**
     * Extra menu which will be
     *
     */
    menu?: Factorable<Promisable<JSX.Element>>;
}
/**
 *  TODO: [💽] Maybe allow IToolbarIcon to be just a string_char_emoji
 */
