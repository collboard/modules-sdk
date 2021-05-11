// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { AbstractSystem } from '../AbstractSystem';
import { IconsToolbar } from './IconsToolbar';
export declare enum ToolbarName {
    Tools = 'TOOLS',
    Navigation = 'NAVIGATION',
}
/**
 * ToolbarSystem can register and manage toolbars and icons which there are.
 * TODO: Destroy all its IconsToolbar with it
 *
 * @collboard-system
 */
export declare class ToolbarSystem extends AbstractSystem {
    private toolbars;
    protected init(): Promise<void>;
    getToolbar(toolbarName: ToolbarName): IconsToolbar;
    destroy(): Promise<void>;
}
