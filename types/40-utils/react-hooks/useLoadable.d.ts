// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Loadable } from '../typeHelpers';
/**
 * @collboard-modules-sdk
 *
 * @deprecated [🍿] Do not use enums but object as const OR 'LITERAL VALUES' instead
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
interface IUseLoadableResultOngoing<TValue> {
    status: IUseLoadableResultStatus.Ongoing;
    value: TValue;
    error: null;
    isComplete: false;
}
export interface IUseLoadableResultError {
    status: IUseLoadableResultStatus.Error;
    error: Error;
    value: null;
    isComplete: true;
}
export interface IUseLoadableResultComplete<TValue> {
    status: IUseLoadableResultStatus.Complete;
    value: TValue;
    error: null;
    isComplete: true;
}
export declare type IUseLoadableResult<TValue> =
    | IUseLoadableResultPending
    | IUseLoadableResultOngoing<TValue>
    | IUseLoadableResultError
    | IUseLoadableResultComplete<TValue>;
/**
 * React hook that returns current value of given Loadable.
 *
 * @collboard-modules-sdk
 */
export declare function useLoadable<Value>(loadable: Loadable<Value>): IUseLoadableResult<Value>;
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
