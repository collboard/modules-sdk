// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ITraySimpleDefinition } from '../../../40-utils/trayModules/interfaces/ITraySimpleItemTypes';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IToolbarIcon } from '../../ToolbarSystem/IToolbarIcon';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * Maker for creating tray-like modules
 * This is the simple version of the maker which is usefull for creating modules with have predefined list of items which can be stored in as pure JSON
 *
 * Note: There are two makers for tray modules:
 *       - **makeTraySimpleModule** will take pre-defined list of items
 *       - **makeTrayDynamicModule** will allow to define items dynamically
 *
 * @collboard-modules-sdk
 */
export declare function makeTraySimpleModule({
    manifest,
    icon,
    trayDefinition,
}: {
    manifest?: IModuleManifest;
    /**
     * Toolbar icon
     */
    icon: IToolbarIcon | ((systems: ISystems) => IToolbarIcon);
    /**
     * Definition of tray items
     */
    trayDefinition: ITraySimpleDefinition;
}): IModuleDefinition;
