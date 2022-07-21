// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVectorData } from 'xyzt';
import { string_module_name } from '../40-utils/typeAliases';
import { IModuleManifest } from '../50-systems/ModuleStore/interfaces/IModuleManifest';
import { IModulePersister } from '../50-systems/ModuleStore/interfaces/IModulePersister';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * Cornerstone holds all informations about a particular board, such as
 * board name, active and inactive modules.
 *
 * Every board contains exactly one CornerstoneArt and it cannot be deleted.
 *
 * Cornerstone for a current board can be obtained through
 * `MaterialArtVersioningSystem.cornerstoneArts.value`
 *
 * @extends Abstract2dArt
 *
 * @collboard-modules-sdk
 */
export declare class CornerstoneArt
    extends Abstract2dArt /* TODO: Probably only AbstractPlacedArt */
    implements IModulePersister
{
    static serializeName: string;
    static manifest: {
        name: string;
    };
    /**
     * String containing user-editable board name
     */
    boardname: string;
    get topLeftCorner(): IVectorData;
    get bottomRightCorner(): IVectorData;
    isNear(pointToTest: IVectorData): boolean;
    get acceptedAttributes(): never[];
    render(isSelected: boolean): JSX.Element;
    /**
     * List of user-activated modules on a board
     */
    modulesActive?: Array<string_module_name>;
    /**
     * List of user-inactivated modules on a board
     */
    modulesInactive?: Array<string_module_name>;
    /**
     * Removes module from `modulesActive` and `modulesInactive`
     */
    private moduleRemoveFromActivateAndDeactivateList;
    /**
     * Add a module among user-activated modules on board
     */
    moduleActivate(moduleManifest: IModuleManifest): void;
    /**
     * Add a module among user-deactivated modules on board
     */
    moduleDeactivate(moduleManifest: IModuleManifest): void;
}
/**
 * virtualCornerstoneArt is "fake" corner stone for yet non existing boards
 *
 * @collboard-modules-sdk
 */
export declare const virtualCornerstoneArt: CornerstoneArt;
/**
 * TODO: [🍫] In entire repository go through all Arrays and repace some of them with Sets:
 *       Example: modulesActive and modulesInactive should be Set<string_module_name> because it does not depend on order and should be unique
 */
