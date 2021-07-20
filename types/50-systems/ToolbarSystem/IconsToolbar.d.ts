// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable } from '../../40-utils/destroyables/Destroyable';
import { IDestroyable } from '../../40-utils/destroyables/IDestroyable';
import { Registration } from '../../40-utils/destroyables/Registration';
import { FocusSystem } from '../FocusSystem/0-FocusSystem';
import { ShortcutsSystem } from '../ShortcutsSystem/0-ShortcutsSystem';
import { ToolbarName } from './0-ToolbarSystem';
import { IToolbarIcon } from './IToolbarIcon';
export declare class IconsToolbar extends Destroyable implements IDestroyable {
    readonly toolbarName: ToolbarName;
    private shortcutsSystem;
    private focusSystem;
    activeIcons: IToolbarIcon[];
    icons: IToolbarIcon[];
    /**
     *
     * @param toolbarName does not effect IconsToolbar behaviour, it solves only for identification purposes.
     */
    constructor(toolbarName: ToolbarName, shortcutsSystem: ShortcutsSystem, focusSystem: FocusSystem);
    private selectThrottleQueue;
    private iconOrNameToIcon;
    /**
     * @param iconOrName You can use here either full IToolbarIcon (same reference that is registered) or name (especially usefull when triggering externally)
     */
    handleIconClick(iconOrName: IToolbarIcon | string): Promise<void>;
    /**
     * @param iconOrName You can use here either full IToolbarIcon (same reference that is registered) or name (especially usefull when triggering externally)
     */
    isIconActive(iconOrName: IToolbarIcon | string): boolean;
    registerIcon(icon: IToolbarIcon): Registration;
    destroy(): Promise<void>;
}
