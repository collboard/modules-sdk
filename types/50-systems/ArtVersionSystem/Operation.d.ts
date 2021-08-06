// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable, IDestroyable } from 'destroyable';
import { ICommitData } from '../../10-database/interfaces/ICommitData';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { ClosePreventionSystem } from '../ClosePreventionSystem/0-ClosePreventionSystem';
import { IClosePreventable } from '../ClosePreventionSystem/IClosePreventable';
import { IArtVersioningSystem } from './IArtVersionSystem';
import { IFreshMaterialOperation, IOngoingMaterialOperation } from './IOperation';
/**
 * Start with takeArts, takeCommits, newArts or takeArtsOrCommitsOrNulls continue with update (oe other update methods) and end with persist or delete.
 */
export declare class Operation
    extends Destroyable
    implements IClosePreventable, IDestroyable, IFreshMaterialOperation, IOngoingMaterialOperation {
    private artVersioningSystem;
    private closePreventionSystem;
    private operationId;
    private operationName;
    static ORIGIN: symbol;
    constructor(
        artVersioningSystem: IArtVersioningSystem,
        closePreventionSystem: ClosePreventionSystem,
        operationName: string,
    );
    private previousCommitsOrNullsOrOrigins;
    private get commits();
    get canBeClosed(): boolean;
    private isValuable;
    /**
     * Tells that this state of operation and its arts can be instantly closed without destructing valuable user data. This will be turned on automatically on new update - takeArts(), takeCommits(), newArts().
     */
    worthless(): this;
    /**
     * This reverts worthless() method.
     */
    valuable(): this;
    takeArts(...previousArts: AbstractArt[]): this;
    takeCommits(...previousCommits: ICommitData[]): this;
    private takeArtsOrCommitsOrNullsOrOrigins;
    newArts(...arts: AbstractArt[]): this;
    private unpushedCommits;
    private updatedCountInCurrentPersisting;
    update(...arts: AbstractArt[]): this;
    private updateOne;
    /**
     *
     * Note: This is helper for using just method update
     * @param artCallback
     */
    updateWithCallback(artCallback: (art: AbstractArt) => AbstractArt): this;
    /**
     *
     * Note: This is helper for using just method update
     * @param artMutatingCallback
     */
    updateWithMutatingCallback(artMutatingCallback: (art: AbstractArt) => void): this;
    /**
     * This method will delete all arts in the operation and persist them
     * Note: This is helper for using just methods update and persist
     */
    delete(): this;
    /**
     * Abort whole operation and do not persist it
     * Note: Not returning this because this is totally final command
     */
    abort(): void;
    destroy(): Promise<void>;
    /**
     * Note: returning this because you can persist operation multiple times
     */
    persist(): this;
    private get unpersistedCommits();
    private lastPushTick;
    private pushTick;
    private expectNoUnpersistedCommits;
    private checkIfStartedProperly;
    private checkIfPersistedProperly;
    private static isCommitLike;
}
