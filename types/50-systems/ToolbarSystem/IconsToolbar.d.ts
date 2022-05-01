// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable, IDestroyable, Registration } from 'destroyable';
import { ControlSystem } from '../ControlSystem/ControlSystem';
import { FocusSystem } from '../FocusSystem/0-FocusSystem';
import { ToolbarName } from './0-ToolbarSystem';
import { IToolbarIcon } from './IToolbarIcon';
export declare class IconsToolbar extends Destroyable implements IDestroyable {
    readonly toolbarName: ToolbarName;
    private controlSystem;
    private focusSystem;
    activeIcons: IToolbarIcon[];
    icons: IToolbarIcon[];
    /**
     *
     * @param toolbarName does not effect IconsToolbar behaviour, it solves only for identification purposes.
     */
    constructor(toolbarName: ToolbarName, controlSystem: ControlSystem, focusSystem: FocusSystem);
    private selectThrottleQueue;
    private iconOrNameToIcon;
    /**
     * @param iconOrName You can use here either full IToolbarIcon (same reference that is registered) or name (especially usefull when triggering externally)
     *
     * TODO: Rename to trigerIcon
     */
    handleIconClick(iconOrName: IToolbarIcon | string): Promise<void>;
    /**
     * @param iconOrName You can use here either full IToolbarIcon (same reference that is registered) or name (especially usefull when triggering externally)
     */
    isIconActive(iconOrName: IToolbarIcon | string): boolean;
    registerIcon(icon: IToolbarIcon): Registration;
    destroy(): Promise<void>;
}
