// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IRoutePathParams } from '../../RoutingSystem/routePath';
import { ToolbarName } from '../../ToolbarSystem/0-ToolbarSystem';
import { IToolbarIcon } from '../../ToolbarSystem/IToolbarIcon';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
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
    routeParams: Partial<IRoutePathParams>;
}): IModuleDefinition;
