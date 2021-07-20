// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IAwaitable } from '../../../40-utils/IAwaitable';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { ToolbarName } from '../../ToolbarSystem/0-ToolbarSystem';
import { IToolbarIcon } from '../../ToolbarSystem/IToolbarIcon';
import { IModule, IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * Makes toolbar icon module which setup/unsetup given submodule when user select/unselect icon
 * TODO: Probbably better name (makeIconModuleOnModule vs. makeIconModuleOnRoute)
 *
 * @collboard-modules-sdk
 */
export declare function makeIconModuleOnModule(protoModule: {
    manifest?: IModuleManifest;
    toolbar: ToolbarName;
    icon: IToolbarIcon | ((systems: ISystems) => IAwaitable<IToolbarIcon>);
    moduleActivatedByIcon: IModule;
}): IModuleDefinition;
