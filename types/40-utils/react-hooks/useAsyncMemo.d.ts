// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
/**
 * React hook for generating async memoized data.
 * This is a copy of @see https://github.com/awmleer/use-async-memo/blob/master/src/index.ts
 *
 * @collboard-modules-sdk
 */
export declare function useAsyncMemo<TValue>(
    factory: () => Promise<TValue> | undefined | null,
    deps: React.DependencyList,
): TValue | undefined;
export declare function useAsyncMemo<TValue>(
    factory: () => Promise<TValue> | undefined | null,
    deps: React.DependencyList,
    initial: TValue,
): TValue;
/**
 * TODO: Handle errors here
 * Note: Hook for modules must use same React as the main Collboard app
 *       So this is a copy of @see https://github.com/awmleer/use-async-memo/blob/master/src/index.ts
 * TODO: [🧵] Move to external LIB for react loadables
 */
