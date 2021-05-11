// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable } from '../../40-utils/destroyables/Destroyable';
import { IDestroyable } from '../../40-utils/destroyables/IDestroyable';
import { Registration } from '../../40-utils/destroyables/Registration';
import { ShortcutsSystem } from '../ShortcutsSystem/0-ShortcutsSystem';
import { ToolbarName } from './0-ToolbarSystem';
import { IToolbarIcon } from './IToolbarIcon';
/**
 * TODO: Destoryable (destroy for example queues)
 */
export declare class IconsToolbar extends Destroyable implements IDestroyable {
    readonly toolbarName: ToolbarName;
    private shortcutsSystem;
    activeIcon: IToolbarIcon | null;
    icons: IToolbarIcon[];
    private activeIconSelectRegistration;
    /**
     *
     * @param toolbarName does not effect IconsToolbar behaviour, it solves only for identification purposes.
     */
    constructor(toolbarName: ToolbarName, shortcutsSystem: ShortcutsSystem);
    /**
     * @param icon You can use here either full IToolbarIcon (same reference that is registered) or name (especially usefull when triggering externally)
     */
    selectIcon(iconOrIconName: IToolbarIcon | string): Promise<void>;
    isActive(toolbarIconOrName: IToolbarIcon | string): boolean;
    private autoSelectQueue;
    registerIcon(icon: IToolbarIcon): Registration;
    destroy(): Promise<void>;
}
