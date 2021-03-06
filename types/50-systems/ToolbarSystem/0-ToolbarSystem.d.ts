// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Observable } from 'rxjs';
import { AbstractSystem } from '../AbstractSystem';
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
    getToolbar(toolbarName: ToolbarName): IconsToolbar;
    getAllToolbars(): Record<ToolbarName, IconsToolbar>;
    /**
     * All actions from all toolbars will be merged into one observable stream
     */
    readonly allActiveIcons: Observable<IToolbarIcon[]>;
    destroy(): Promise<void>;
}
/**
 * TODO: Add method allIcons and use it internally in allActiveIcons
 */
