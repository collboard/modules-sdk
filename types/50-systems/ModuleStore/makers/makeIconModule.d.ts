
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { ISystems } from '../../00-SystemsContainer/ISystems';
import { ToolbarName } from '../../ToolbarSystem/0-ToolbarSystem';
import { IToolbarIcon } from '../../ToolbarSystem/IToolbarIcon';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 *
 * @collboard SDK
 */
export declare function makeIconModule(protoModule: {
    manifest?: IModuleManifest;
    toolbar: ToolbarName;
    icon: IToolbarIcon | ((systemsContainer: ISystems) => IToolbarIcon);
}): IModuleDefinition;

                  