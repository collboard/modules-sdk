// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IUrlVariables } from '../../RoutingSystem/routePath/IUrlVariables';
import { ToolbarName } from '../../ToolbarSystem/0-ToolbarSystem';
import { IToolbarIcon } from '../../ToolbarSystem/IToolbarIcon';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest/IModuleManifest';
/**
 * Makes toolbar icon module which setup/unsetup given submodule when user select/unselect icon
 * TODO: Probbably better name (makeIconModuleOnModule vs. makeIconModuleOnRoute)
 *
 * @collboard-modules-sdk
 */
export declare function makeIconModuleOnRoute(protoModule: {
    manifest?: IModuleManifest;
    toolbar: ToolbarName;
    icon: IToolbarIcon | ((systems: ISystems) => IToolbarIcon);
    routeParams: Partial<IUrlVariables>;
}): IModuleDefinition;
/**
 * TODO: !!x Rename to makeIconShortcutModule
 */
