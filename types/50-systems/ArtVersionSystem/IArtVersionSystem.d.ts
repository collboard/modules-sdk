// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { BehaviorSubject, Observable } from 'rxjs';
import { Commit } from '../../10-database/Commit';
import { ICommitData } from '../../10-database/interfaces/ICommitData';
import { uuid } from '../../40-utils/typeAliases';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { CornerstoneArt } from '../../71-arts/30-CornerstoneArt';
import { IModuleSignature } from './IModuleSignature';
import { IFreshMaterialOperation } from './IOperation';
import { IPermissions } from './IPermissions';
/**
 * TODO: In interface use only interfaces - make interface (or generic) for Commit, AbstractArt and CornerstoneArt
 */
export interface IArtVersioningSystem extends IDestroyable {
    readonly moduleSignature: IModuleSignature;
    readonly commitsObservable: Observable<Commit>;
    readonly artsObservable: Observable<AbstractArt>;
    readonly permissions: IPermissions;
    readonly clientId: uuid;
    readonly lastCommit: ICommitData | null;
    readonly lastCommitId: number;
    readonly commits: Array<ICommitData>;
    readonly commitsPlaced: Array<ICommitData>;
    readonly arts: Array<AbstractArt>;
    readonly artsPlaced: Array<AbstractArt>;
    readonly cornerstoneArts: BehaviorSubject<CornerstoneArt>;
    readonly sortCommitsByOperationId: Array<Array<ICommitData>>;
    findPreviousCommit(commit: ICommitData): ICommitData | null;
    findNextCommits(commit: ICommitData): Array<ICommitData>;
    findNextCommit(commit: ICommitData): ICommitData | null;
    hasNextCommits(commit: ICommitData): boolean;
    findOriginCommit(commit: ICommitData): ICommitData;
    isLastInItsTree(commit: ICommitData): boolean;
    findLastCommitOfArt(art: AbstractArt): ICommitData | null;
    findCommitById(commitId: uuid | null | undefined): ICommitData | null;
    findCommitsByOperationId(operationId: uuid): Array<ICommitData>;
    signAs(moduleSignature: IModuleSignature): IArtVersioningSystem;
    createOperation(operationName: string): IFreshMaterialOperation;
    setCommitWasPersisted(commitId: uuid, id: number): void;
}
