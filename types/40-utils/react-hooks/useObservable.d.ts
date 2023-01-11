// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BehaviorSubject, Observable } from 'rxjs';
import { IUseLoadableResult, IUseLoadableResultError, IUseLoadableResultPending } from './useLoadable';
/**
 * React hook that returns current value of given Observable.
 *
 * @collboard-modules-sdk
 */
export declare function useObservable<TValue>(
    observable: BehaviorSubject<TValue>,
): Exclude<IUseLoadableResult<TValue>, IUseLoadableResultPending | IUseLoadableResultError>;
export declare function useObservable<TValue>(observable: Observable<TValue>): IUseLoadableResult<TValue>;
/**
 * TODO: [🐞] Proppably also allow to override deps like in usePromise
 * TODO: [🧵] Move to external LIB for react loadables
 */
