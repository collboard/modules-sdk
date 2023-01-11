// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { Promisable } from 'type-fest';
import { IUseLoadableResultComplete, IUseLoadableResultError, IUseLoadableResultPending } from './useLoadable';
declare type IUsePromiseResult<TValue> =
    | IUseLoadableResultPending
    | IUseLoadableResultError
    | IUseLoadableResultComplete<TValue>;
/**
 * React hook that returns result of Promise or its pending/error state.
 *
 * @collboard-modules-sdk
 */
export declare function usePromise<TValue>(
    promise: Promisable<TValue>,
    deps?: React.DependencyList,
): IUsePromiseResult<TValue>;
export {};
/**
 * TODO: [🧵] Move to external LIB for react loadables
 */
