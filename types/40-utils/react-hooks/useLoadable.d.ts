// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Loadable } from '../typeHelpers';
/**
 * @collboard-modules-sdk
 */
export declare enum IUseLoadableResultStatus {
    Pending = 'PENDING',
    Ongoing = 'ONGOING',
    Error = 'ERROR',
    Complete = 'COMPLETE',
}
export interface IUseLoadableResultPending {
    status: IUseLoadableResultStatus.Pending;
    value: undefined;
    error: undefined;
    isComplete: false;
}
interface IUseLoadableResultOngoing<T> {
    status: IUseLoadableResultStatus.Ongoing;
    value: T;
    error: null;
    isComplete: false;
}
export interface IUseLoadableResultError {
    status: IUseLoadableResultStatus.Error;
    error: Error;
    value: null;
    isComplete: true;
}
export interface IUseLoadableResultComplete<T> {
    status: IUseLoadableResultStatus.Complete;
    value: T;
    error: null;
    isComplete: true;
}
export declare type IUseLoadableResult<T> =
    | IUseLoadableResultPending
    | IUseLoadableResultOngoing<T>
    | IUseLoadableResultError
    | IUseLoadableResultComplete<T>;
/**
 * React hook that returns current value of given Loadable.
 *
 * @collboard-modules-sdk
 */
export declare function useLoadable<T>(loadable: Loadable<T>): IUseLoadableResult<T>;
export {};
/**
 * TODO: Proppably also with using this hook, create <Loadable> component as a combination and replacement of AsyncContentComponent and ObservableContentComponent:
 *     > <Loadable>
 *     >    {async ()=>{
 *     >      ...
 *     >    }}
 *     >   <LoadableError>
 *     >     ...
 *     >   </LoadableError>
 *     > </Loadable>
 */
/**
 * TODO: [🐞] Proppably also allow to override deps like in usePromise
 * TODO: [🧵] Move to external LIB for react loadables
 */
