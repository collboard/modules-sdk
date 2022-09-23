// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IconsToolbar } from './IconsToolbar';
interface IIconsToolbarComponentProps {
    iconsToolbar: IconsToolbar;
}
/**
 * Renders the toolbar
 *
 * There are two similar components:
 * - **IconsToolbarComponent** which renders the toolbar
 * - **IconsToolbarMenuComponent** which renders the menu of currently active icon in the toolbar
 *
 * @not-collboard-modules-sdk because IconsToolbarComponent is a private component of ToolbarSystem
 */
export declare function IconsToolbarComponent({ iconsToolbar }: IIconsToolbarComponentProps): JSX.Element;
export {};
/**
 * TODO: [🎲] It is a bit inconsistent that renderMenu wraps content with <Menu but renderToolbar not
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
