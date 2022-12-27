// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable, IDestroyable } from 'destroyable';
import { ICommitData } from '../../10-database/interfaces/ICommitData';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { IClosePreventable } from '../ClosePreventionSystem/IClosePreventable';
import { IClosePreventionSystem } from '../ClosePreventionSystem/IClosePreventionSystem';
import { IArtVersioningSystem } from './IArtVersionSystem';
import { IFreshMaterialOperation, IOngoingMaterialOperation } from './IOperation';
/**
 * Start with takeArts, takeCommits, newArts or takeArtsOrCommitsOrNulls continue with update (oe other update methods) and end with persist or delete.
 */
export declare class Operation
    extends Destroyable
    implements IClosePreventable, IDestroyable, IFreshMaterialOperation, IOngoingMaterialOperation
{
    private artVersioningSystem;
    private pushCommitsToVersioningSystem;
    private closePreventionSystem;
    private operationId;
    private operationName;
    static ORIGIN: symbol;
    constructor(
        artVersioningSystem: IArtVersioningSystem,
        pushCommitsToVersioningSystem: (...commits: Array<ICommitData>) => void,
        closePreventionSystem: IClosePreventionSystem,
        operationName: string,
    );
    private previousCommitsOrNullsOrOrigins;
    private get commits();
    get canBeClosed(): boolean;
    private isValuable;
    /**
     * Tells that this state of operation and its arts can be instantly closed without destructing valuable user data.
     * This will be reverted automatically on new update - i.e takeArts(), takeCommits(), newArts().
     */
    worthless(): this;
    /**
     * This reverts worthless() method.
     */
    valuable(): this;
    get arts(): Array<AbstractArt>;
    takeArts(...previousArts: Array<AbstractArt>): this;
    takeCommits(...previousCommits: Array<ICommitData>): this;
    private takeArtsOrCommitsOrNullsOrOrigins;
    newArts(...arts: Array<AbstractArt>): this;
    private unpushedCommits;
    private updatedCountInCurrentPersisting;
    update(...arts: Array<AbstractArt>): this;
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
     *
     * Note: This is helper for using just methods update and persist
     */
    deleteArts(): this;
    /**
     * @deprecated use deleteArts
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
     * @idempotent If you call persist multiple times in a row, it will just persist once
     */
    persist(): this;
    private get unpersistedCommits();
    private lastPushTick;
    private pushTick;
    private expectNoUnpersistedCommits;
    private checkIfStartedProperly;
    private checkIfPersistedProperly;
}
/**
 * TODO: !!!! Support here IArt
 * TODO: Override destroy method and really destroy ongoing stuff
 */
