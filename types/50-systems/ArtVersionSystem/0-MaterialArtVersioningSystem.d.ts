// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { BehaviorSubject, Observable } from 'rxjs';
import { Commit } from '../../10-database/Commit';
import { IDestroyable } from '../../40-utils/destroyables/IDestroyable';
import { string_uuid } from '../../40-utils/typeAliases';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { AbstractPlacedArt } from '../../71-arts/25-AbstractPlacedArt';
import { CornerstoneArt } from '../../71-arts/30-CornerstoneArt';
import { ISystems } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../AbstractSystem';
import { IArtVersioningSystem } from './IArtVersionSystem';
import { IModuleSignature } from './IModuleSignature';
import { IPermissions } from './IPermissions';
import { Operation } from './Operation';
/**
 * ArtVersionSystem synchronizes the arts with the remote server.
 * TODO: This is used a lot so maybe we can figure out some better name
 *
 * @collboard-system
 */
export declare class MaterialArtVersioningSystem extends AbstractSystem implements IDestroyable, IArtVersioningSystem {
    readonly moduleSignature: IModuleSignature;
    readonly commitsObservable: Observable<Commit>;
    readonly artsObservable: Observable<AbstractArt>;
    permissions: IPermissions;
    commitsPool: Commit[];
    private currentCommitsPool;
    private commitsObserver?;
    constructor(systemsContainer: ISystems, moduleSignature: IModuleSignature);
    protected init(): Promise<void>;
    get clientUuid(): string;
    signAs(moduleSignature: IModuleSignature): MaterialArtVersioningSystem;
    createOperation(operationName: string): Operation;
    createPrimaryOperation(): Operation;
    _USE_ONLY_INSIDE_CORE_pushCommit(...commits: Commit[]): Promise<void>;
    get lastCommitId(): number;
    setCommitWasPersisted(commitId: string_uuid, id: number): void;
    get commits(): Commit[];
    get arts(): AbstractArt[];
    cornerstoneArts: BehaviorSubject<CornerstoneArt>;
    get commitsPlaced(): Commit[];
    get artsPlaced(): AbstractPlacedArt[];
    get lastCommit(): Commit | null;
    findPreviousCommit(commit: Commit): Commit | null;
    findNextCommits(commit: Commit): Commit[];
    findNextCommit(commit: Commit): Commit | null;
    hasNextCommits(commit: Commit): boolean;
    findOriginCommit(commit: Commit): Commit;
    isLastInItsTree(commit: Commit): boolean;
    findLastCommitOfArt(art: AbstractArt): Commit | null;
    /**
     *
     * @param commitId when null or undefined returns null
     */
    findCommitById(commitId: string_uuid | null | undefined): Commit | null;
    /**
     * Note: This is just a debug class
     */
    get sortCommitsByOperationId(): Commit[][];
    findCommitsByOperationId(operationId: string_uuid): Commit[];
}
