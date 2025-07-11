// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { ICommitData } from '../../10-database/interfaces/ICommitData';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
interface GenericFreshOperation<TOngoingOperation extends IOngoingOperation> extends IDestroyable {
    takeArts(...previousArts: Array<AbstractArt>): IOngoingOperation;
    takeCommits(...previousCommits: Array<ICommitData>): IOngoingOperation;
    newArts(...arts: Array<AbstractArt>): IOngoingOperation;
    arts: Array<AbstractArt>;
}
export type IFreshOperation = GenericFreshOperation<IOngoingOperation>;
export type IFreshMaterialOperation = GenericFreshOperation<IOngoingMaterialOperation>;
export interface IOngoingOperation extends IDestroyable {
    update(...arts: Array<AbstractArt>): this;
    updateWithCallback(artCallback: (art: AbstractArt) => AbstractArt): this;
    updateWithMutatingCallback(artMutatingCallback: (art: AbstractArt) => void): this;
    delete(): void;
    arts: Array<AbstractArt>;
}
export interface IOngoingMaterialOperation extends IOngoingOperation {
    abort(): void;
    worthless(): IOngoingOperation;
    valuable(): IOngoingOperation;
    persist(): IOngoingOperation;
}
export {};
