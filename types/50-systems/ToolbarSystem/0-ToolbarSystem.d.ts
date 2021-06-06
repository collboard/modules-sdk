// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { AbstractSystem } from '../AbstractSystem';
import { IconsToolbar } from './IconsToolbar';
/**
 *
 * TODO: Unite naming ToolbarName, which can be part of IToolbarIcon (similar as section on it) OR combine it with ExtraJsxPlace
 *
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
    private shortcutsSystem;
    protected init(): Promise<void>;
    getToolbar(toolbarName: ToolbarName): IconsToolbar;
    destroy(): Promise<void>;
}
