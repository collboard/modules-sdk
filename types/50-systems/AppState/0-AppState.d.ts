
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IVector, Transform, Vector } from 'xyzt';
import { string_attribute } from '../../40-utils/typeAliases';
import { AbstractPlacedArt } from '../../71-arts/25-AbstractPlacedArt';
import { AbstractSystem } from '../AbstractSystem';
/**
 * AppState is not quite a system but an object representing the state of the Collboard app.
 * TODO: Should it be a system?
 */
export declare class AppState extends AbstractSystem {
    protected init(): Promise<void>;
    /**
     * This represents observer view on the current board, Every user can have different. For example every user can have different position on the board.
     * TODO: transform, probbably windowSize should be managed by CollSpace
     */
    transform: Transform;
    windowSize: Vector;
    private watchWindowSize;
    /**
     * TODO: selected, selection,... should be managed by some separate system OR this system rename to SelectionSystem
     * TODO: When loosing focus in the app (for example clicking on board name or opening a modal), selection should be canceled
     */
    selected: AbstractPlacedArt[];
    /**
     * TODO: Some better name like selectBox AND rname it globally not only here
     * TODO: Use xyzt boundingBox
     */
    selection: null | {
        point1: IVector;
        point2: IVector;
    };
    _TODO_REMOVE_versionOfArtsForRendring: number;
    debug: {
        artsList: boolean;
    };
    setSelection({ selected, selection, }: {
        selected?: AbstractPlacedArt[];
        selection?: null | {
            point1: IVector;
            point2: IVector;
        };
    }): void;
    cancelSelection(): void;
    getSelection(): import("../../40-utils/pointsToSquare").square | null;
    /**
     * This bounding box is relative to screen
     */
    getSelectedBoundingBox(): {
        topLeftCorner: Vector;
        bottomRightCorner: Vector;
    } | undefined;
    getCommonAttributeValueOfSelectedArts(name: string_attribute): any;
    getCommonAttributesOfSelectedArts(): string[];
}

                  