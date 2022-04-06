// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { Vector } from 'xyzt';
import { IFactory } from '../../../40-utils/IFactory';
import { IArrayable } from '../../../40-utils/toArray';
import { ITrayDefinition } from '../../../40-utils/trayModules/TrayItemTypes';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IToolbarIcon } from '../../ToolbarSystem/IToolbarIcon';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * Maker for creating tray-like modules (like H-edu or Montessori)
 *
 * @collboard-modules-sdk
 */
export declare function makeTrayModule<TArt extends Abstract2dArt>(protoModule: {
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
    newArtMaker: (id: string, position: Vector) => Promisable<IArrayable<TArt>>;
}): IFactory<IModuleDefinition>;
