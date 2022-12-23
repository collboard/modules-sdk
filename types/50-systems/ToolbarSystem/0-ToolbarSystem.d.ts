// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Observable } from 'rxjs';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { IconsToolbar } from './IconsToolbar';
import { IToolbarIcon } from './IToolbarIcon';
/**
 *
 * TODO: Unite naming ToolbarName, which can be part of IToolbarIcon (similar as section on it) OR combine it with UserInterfaceElementPlace
 *
 * @deprecated [🍿] Do not use enums but object as const OR 'LITERAL VALUES' instead
 *
 * @collboard-modules-sdk
 */
export declare enum ToolbarName {
    Tools = 'TOOLS',
    Navigation = 'NAVIGATION',
    Social = 'SOCIAL',
}
/**
 * ToolbarSystem can register and manage toolbars and icons which there are.
 * TODO: Destroy all its IconsToolbar with it
 *
 * @collboard-system
 */
export declare class ToolbarSystem extends AbstractSystem {
    private toolbars;
    private focusSystem;
    private controlSystem;
    private userInterfaceSystem;
    protected init(): Promise<void>;
    private addToolbarsToUserInterface;
    /**
     * Renders the toolbar
     *
     */
    private renderToolbar;
    /**
     * Renders the menu of currently active icon in the toolbar
     *
     */
    private renderMenuOfActiveIcon;
    /**
     * Returns the toolbar
     *
     * Note: If you want to render the toolbar use renderToolbar or renderMenu instead
     */
    getToolbar(toolbarName: ToolbarName): IconsToolbar;
    /**
     * List all the toolbars
     */
    getAllToolbars(): Record<ToolbarName, IconsToolbar>;
    /**
     * All actions from all toolbars will be merged into one observable stream
     */
    readonly allActiveIcons: Observable<IToolbarIcon[]>;
    destroy(): Promise<void>;
}
/**
 * TODO: [0] Some better way to decide if the icon has editing capabilities or not
 * TODO: [🎲] It is a bit inconsistent that renderMenu wraps content with <Menu but renderToolbar not
 * TODO: Add method allIcons and use it internally in allActiveIcons
 * Note: [👩‍👩‍👦] This is a bit strange piece of logic:
 *             1) TollbarSystem registers some own components into UserInterfaceSystem
 *             2) In one of this components there is rendered the place from UserInterfaceSystem
 *             Maybe solve this better (non-cyclical way) in the future
 */
