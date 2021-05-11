// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Vector } from 'xyzt';
import { ISystems } from '../../../../50-systems/00-SystemsContainer/ISystems';
import { IModuleFactory } from '../../../../50-systems/ModuleStore/interfaces/IModule';
import { IModuleManifest } from '../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
import { IToolbarIcon } from '../../../../50-systems/ToolbarSystem/IToolbarIcon';
import { Abstract2dArt } from '../../../../71-arts/26-Abstract2dArt';
import { ITrayDefinition } from '../TrayItemTypes';
export declare function makeTrayModule<Art extends Abstract2dArt>(protoModule: {
    manifest?: IModuleManifest;
    icon: IToolbarIcon | ((systemsContainer: ISystems) => IToolbarIcon);
    trayDefinition: ITrayDefinition;
    newArtMaker: (id: string, position: Vector) => Art;
}): IModuleFactory;
