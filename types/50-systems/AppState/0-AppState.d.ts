// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BehaviorSubject } from 'rxjs';
import { IVectorData, Transform, Vector } from 'xyzt';
import { string_attribute, string_uuid } from '../../40-utils/typeAliases';
import { AbstractPlacedArt } from '../../71-arts/25-AbstractPlacedArt';
import { AbstractSystem } from '../AbstractSystem';
/**
 * AppState is not quite a system but an object representing the state of the Collboard app.
 *
 * @deprecated This system will be split into two CollSpace and SelectionSystem and removed
 * @collboard-system
 */
export declare class AppState extends AbstractSystem {
    protected init(): Promise<void>;
    /**
     * Just mirroring the Cornerstone commit with boardname
     */
    readonly boardname: BehaviorSubject<string>;
    /**
     * This represents user-view on the current board, Every user can have different.
     * For example every user can have different position on the board.
     */
    readonly transform: BehaviorSubject<Transform>;
    readonly selected: BehaviorSubject<AbstractPlacedArt[]>;
    readonly selection: BehaviorSubject<{
        point1: IVectorData;
        point2: IVectorData;
    } | null>;
    setSelection({
        selected,
        selection,
    }: {
        selected?: Array<AbstractPlacedArt>;
        selection?: null | {
            point1: IVectorData;
            point2: IVectorData;
        };
    }): void;
    cancelSelection(): void;
    getSelection(): import('../../40-utils/pointsToSquare').square | null;
    /**
     * This bounding box is relative to screen
     */
    getSelectedBoundingBox():
        | {
              topLeftCorner: Vector;
              bottomRightCorner: Vector;
          }
        | undefined;
    /**
     * Checks if there is any selected art which has given attribute
     */
    hasAnyOfSelectedArtsGivenAttribute(attributeName: string_attribute): boolean;
    /**
     * Get common attributes of all selected arts
     *
     * @example If there is no selected art, returns []
     * @example If there is one selected art, returns its attributes
     * @example If there are two selected arts
     *          - Art A with attributes `color` and `size`
     *          - Art B with attributes `foo` and `color`
     *          It returns `color`
     */
    getCommonAttributesOfSelectedArts(): Array<string_attribute>;
    /**
     *
     *
     * [🌌]
     */
    isArtSelected({ artId, isExclusive }: IIsArtSelectedOptions): boolean;
    /**
     *
     *
     * [🌌]
     */
    useArtSelected({ artId, isExclusive }: IIsArtSelectedOptions): boolean;
}
interface IIsArtSelectedOptions {
    /**
     * Unique ID of the art
     */
    artId: string_uuid;
    /**
     * If true, it will return true only if the art is selected and no other
     */
    isExclusive: boolean;
}
export {};
/**
 * TODO: [🍵] Make SelectionSystem a system and much better with ONLY one BehaviorSubject with data and other stuff just Observables derived from it.
 * TODO: Selected: When loosing focus in the app (for example clicking on board name or opening a modal), selection should be canceled
 * TODO: Selection: Some better name like selectBox AND rname it globally not only here
 * TODO: Selection: Should return LIB xyzt boundingBox
 */
