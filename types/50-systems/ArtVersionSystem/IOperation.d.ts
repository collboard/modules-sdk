
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { Commit } from '../../10-database/Commit';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
interface GenericFreshOperation<TOngoingOperation extends IOngoingOperation> {
    takeArts(...previousArts: AbstractArt[]): IOngoingOperation;
    takeCommits(...previousCommits: Commit[]): IOngoingOperation;
    newArts(...arts: AbstractArt[]): IOngoingOperation;
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

                  