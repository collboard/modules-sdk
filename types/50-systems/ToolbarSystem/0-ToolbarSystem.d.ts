// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Observable } from 'rxjs';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { IconsToolbar } from './IconsToolbar';
import { IToolbarIcon } from './IToolbarIcon';
/**
 *
 * TODO: Unite naming ToolbarName, which can be part of IToolbarIcon (similar as section on it) OR combine it with UserInterfaceElementPlace
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
    protected init(): Promise<void>;
    /**
     * Renders the toolbar
     *
     * There are two similar methods:
     * - **render** which renders the toolbar
     * - **renderMenu** which renders the menu of currently active icon in the toolbar
     */
    renderToolbar(toolbarName: ToolbarName): JSX.Element;
    /**
     * Renders the menu of currently active icon in the toolbar
     *
     * There are two similar methods:
     * - **render** which renders the toolbar
     * - **renderMenu** which renders the menu of currently active icon in the toolbar
     */
    renderMenu(toolbarName: ToolbarName): JSX.Element;
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
 * TODO: [🎲] It is a bit inconsistent that renderMenu wraps content with <Menu but renderToolbar not
 * TODO: Add method allIcons and use it internally in allActiveIcons
 */
