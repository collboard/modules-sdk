// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Vector } from 'xyzt';
import { ITrayDefinition } from '../../../40-utils/trayModules/TrayItemTypes';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IToolbarIcon } from '../../ToolbarSystem/IToolbarIcon';
import { IModuleFactory } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * Maker for creating tray-like modules (like H-edu or Montessori)
 *
 * @collboard-modules-sdk
 */
export declare function makeTrayModule<Art extends Abstract2dArt>(protoModule: {
    manifest?: IModuleManifest;
    /**
     * Toolbar icon
     */
    icon: IToolbarIcon | ((systems: ISystems) => IToolbarIcon);
    /**
     * Definition of tray items
     */
    trayDefinition: ITrayDefinition;
    /**
     * Function returning new Art from id and position
     */
    newArtMaker: (id: string, position: Vector) => Art;
}): IModuleFactory;
