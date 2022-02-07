// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ICommitData } from '../../10-database/interfaces/ICommitData';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
interface GenericFreshOperation<TOngoingOperation extends IOngoingOperation> {
    takeArts(...previousArts: AbstractArt[]): IOngoingOperation;
    takeCommits(...previousCommits: ICommitData[]): IOngoingOperation;
    newArts(...arts: AbstractArt[]): IOngoingOperation;
    arts: AbstractArt[];
}
export declare type IFreshOperation = GenericFreshOperation<IOngoingOperation>;
export declare type IFreshMaterialOperation = GenericFreshOperation<IOngoingMaterialOperation>;
export interface IOngoingOperation {
    update(...arts: AbstractArt[]): this;
    updateWithCallback(artCallback: (art: AbstractArt) => AbstractArt): this;
    updateWithMutatingCallback(artMutatingCallback: (art: AbstractArt) => void): this;
    delete(): void;
}
export interface IOngoingMaterialOperation extends IOngoingOperation {
    abort(): void;
    worthless(): IOngoingOperation;
    valuable(): IOngoingOperation;
    persist(): IOngoingOperation;
}
export {};
