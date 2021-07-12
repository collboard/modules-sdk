// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from 'destroyable';
import { BehaviorSubject, Observable } from 'rxjs';
import { Commit } from '../../10-database/Commit';
import { string_uuid } from '../../40-utils/typeAliases';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { CornerstoneArt } from '../../71-arts/30-CornerstoneArt';
import { IModuleSignature } from './IModuleSignature';
import { IFreshMaterialOperation } from './IOperation';
import { IPermissions } from './IPermissions';
/**
 * TODO: in interface use only interfaces - make interface (or generic) for Commit, AbstractArt and CornerstoneArt
 */
export interface IArtVersioningSystem extends IDestroyable {
    readonly moduleSignature: IModuleSignature;
    readonly commitsObservable: Observable<Commit>;
    readonly artsObservable: Observable<AbstractArt>;
    readonly permissions: IPermissions;
    readonly clientUuid: string_uuid;
    readonly lastCommit: Commit | null;
    readonly lastCommitId: number;
    readonly commits: Commit[];
    readonly commitsPlaced: Commit[];
    readonly arts: AbstractArt[];
    readonly artsPlaced: AbstractArt[];
    readonly cornerstoneArts: BehaviorSubject<CornerstoneArt>;
    readonly sortCommitsByOperationId: Commit[][];
    findPreviousCommit(commit: Commit): Commit | null;
    findNextCommits(commit: Commit): Commit[];
    findNextCommit(commit: Commit): Commit | null;
    hasNextCommits(commit: Commit): boolean;
    findOriginCommit(commit: Commit): Commit;
    isLastInItsTree(commit: Commit): boolean;
    findLastCommitOfArt(art: AbstractArt): Commit | null;
    findCommitById(commitId: string_uuid | null | undefined): Commit | null;
    findCommitsByOperationId(operationId: string_uuid): Commit[];
    signAs(moduleSignature: IModuleSignature): IArtVersioningSystem;
    createOperation(operationName: string): IFreshMaterialOperation;
    setCommitWasPersisted(commitId: string_uuid, id: number): void;
    _USE_ONLY_INSIDE_CORE_pushCommit(...commits: Commit[]): Promise<void>;
}
