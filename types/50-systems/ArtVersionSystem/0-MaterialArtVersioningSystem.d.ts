// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { BehaviorSubject, Observable } from 'rxjs';
import { Commit } from '../../10-database/Commit';
import { ICommitData } from '../../10-database/interfaces/ICommitData';
import { string_uuid } from '../../40-utils/typeAliases';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { AbstractPlacedArt } from '../../71-arts/25-AbstractPlacedArt';
import { CornerstoneArt } from '../../71-arts/30-CornerstoneArt';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
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
export declare class MaterialArtVersioningSystem extends AbstractSystem implements IArtVersioningSystem, IDestroyable {
    readonly moduleSignature: IModuleSignature;
    readonly commitsObservable: Observable<Commit>;
    readonly artsObservable: Observable<AbstractArt>;
    permissions: IPermissions;
    commitsPool: ICommitData[];
    private currentCommitsPool;
    private commitsObserver?;
    constructor(systems: ISystemsExtended, moduleSignature: IModuleSignature);
    private identitySystem;
    private closePreventionSystem;
    private artSerializer;
    protected init(): Promise<void>;
    get clientId(): string;
    signAs(moduleSignature: IModuleSignature): MaterialArtVersioningSystem;
    createOperation(operationName: string): Operation;
    createPrimaryOperation(): Operation;
    _USE_ONLY_INSIDE_CORE_pushCommit(...commits: ICommitData[]): Promise<void>;
    get lastCommitId(): number;
    setCommitWasPersisted(commitId: string_uuid, id: number): void;
    get commits(): ICommitData[];
    get arts(): AbstractArt[];
    cornerstoneArts: BehaviorSubject<CornerstoneArt>;
    get commitsPlaced(): ICommitData[];
    get artsPlaced(): AbstractPlacedArt[];
    get lastCommit(): ICommitData | null;
    findPreviousCommit(commit: ICommitData): ICommitData | null;
    findNextCommits(commit: ICommitData): ICommitData[];
    findNextCommit(commit: ICommitData): ICommitData | null;
    hasNextCommits(commit: ICommitData): boolean;
    findOriginCommit(commit: ICommitData): ICommitData;
    isLastInItsTree(commit: ICommitData): boolean;
    findLastCommitOfArt(art: AbstractArt): ICommitData | null;
    /**
     *
     * @param commitId when null or undefined returns null
     */
    findCommitById(commitId: string_uuid | null | undefined): ICommitData | null;
    /**
     * Note: This is just a debug class
     */
    get sortCommitsByOperationId(): ICommitData[][];
    findCommitsByOperationId(operationId: string_uuid): ICommitData[];
}
