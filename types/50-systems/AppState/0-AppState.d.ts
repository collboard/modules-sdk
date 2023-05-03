// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BehaviorSubject } from 'rxjs';
import { IVectorData, Transform, Vector } from 'xyzt';
import { square } from '../../40-utils/pointsToSquare';
import { string_attribute, uuid } from '../../40-utils/typeAliases';
import { AbstractPlacedArt } from '../../71-arts/25-AbstractPlacedArt';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
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
     *
     * @deprecated Put to separate system instead
     */
    readonly boardname: BehaviorSubject<string>;
    /**
     * This represents user-view on the current board, Every user can have different.
     * For example every user can have different position on the board.
     *
     * @deprecated Put to CollSpace system instead
     */
    readonly transform: BehaviorSubject<Transform>;
    /**
     * Selected arts
     */
    readonly selected: BehaviorSubject<AbstractPlacedArt[]>;
    /**
     * Selection is just a temporary box created from mousedown until mouseup
     * After the releasing of the mouse selection became selected
     */
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
    /**
     * Set selection to nothing selected
     *
     * @idempotent If you call this function twice, nothing will happen
     */
    cancelSelection(): void;
    getSelection(): null | square;
    /**
     * This bounding box is relative to screen
     */
    getSelectedBoundingBox():
        | {
              topLeft: Vector;
              bottomRight: Vector;
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
    /**
     * Testing code to showcase when selected is changed
     */
    private testSelected;
    /**
     * Testing code to showcase when selection is changed
     */
    private testSelection;
}
interface IIsArtSelectedOptions {
    /**
     * Unique ID of the art
     */
    artId: uuid;
    /**
     * If true, it will return true only if the art is selected and no other
     */
    isExclusive: boolean;
}
export {};
/**
 * TODO: screenBorder should be maybe RxJs observable
 * TODO: [🍵] Make SelectionSystem a system and much better with ONLY one BehaviorSubject with data and other stuff just Observables derived from it.
 * TODO: Selected: When loosing focus in the app (for example clicking on board name or opening a modal), selection should be canceled
 * TODO: Selection: Some better name like selectBox AND rname it globally not only here
 * TODO: Selection: Should return LIB xyzt boundingBox
 * TODO: [💉] Selected virtual arts
 * TODO: [🪑] Compute selection from selected should be probbably done ONLY in AppState (or in future SelectionSystem)
 */
