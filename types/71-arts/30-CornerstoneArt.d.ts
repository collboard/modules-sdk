// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IVector } from 'xyzt';
import { string_module_name } from '../40-utils/typeAliases';
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
export declare class CornerstoneArt extends Abstract2dArt {
    /**
     * String containing user-editable board name
     */
    boardName: string;
    get topLeftCorner(): import('xyzt').IVectorObject;
    get bottomRightCorner(): import('xyzt').IVectorObject;
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): never[];
    render(selected: boolean): JSX.Element;
    /**
     * List of user-activated modules on a board
     */
    modulesActive?: string_module_name[];
    /**
     * List of user-inactivated modules on a board
     */
    modulesInactive?: string_module_name[];
    /**
     * Removes module from `modulesActive` and `modulesInactive`
     */
    private moduleRemoveFromActivateAndDeactivateList;
    /**
     * Add a module among user-activated modules on board
     */
    moduleActivate(moduleName: string_module_name): void;
    /**
     * Add a module among user-deactivated modules on board
     */
    moduleDeactivate(moduleName: string_module_name): void;
}
/**
 * virtualCornerstoneArt is "fake" corner stone for yet non existing boards
 *
 * @collboard-modules-sdk
 */
export declare const virtualCornerstoneArt: CornerstoneArt;
