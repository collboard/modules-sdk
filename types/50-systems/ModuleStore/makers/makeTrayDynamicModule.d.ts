// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { Vector } from 'xyzt';
import { ITrayDynamicDefinition } from '../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Arrayable } from '../../../40-utils/typeHelpers';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IOngoingMaterialOperation } from '../../ArtVersionSystem/IOperation';
import { IToolbarIcon } from '../../ToolbarSystem/IToolbarIcon';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * Maker for creating tray-like modules (like H-edu or Montessori)
 * This is the advanced version of the maker which is usefull for creating modules with can have dynamic number, order or other specific properties
 *
 * Note: There are two makers for tray modules:
 *       - **makeTraySimpleModule** will take pre-defined list of items
 *       - **makeTrayDynamicModule** will allow to define items dynamically
 *
 * @collboard-modules-sdk
 */
export declare function makeDynamicTrayModule<TArt extends Abstract2dArt>(protoModule: {
    manifest?: IModuleManifest;
    /**
     * Toolbar icon
     */
    icon: IToolbarIcon | ((systems: ISystems) => IToolbarIcon);
    /**
     * Definition of tray items
     */
    trayDefinition: ITrayDynamicDefinition;
    /**
     * Function returning new Art from id and position
     */
    newArtMaker(options: {
        itemId: string;
        boardPosition: Vector;
        systems: ISystems;
    }): Promisable<Arrayable<TArt> | IOngoingMaterialOperation>;
}): IModuleDefinition;
