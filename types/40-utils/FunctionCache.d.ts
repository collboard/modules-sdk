// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable, IDestroyable } from 'destroyable';
/**
 * Make a function cacheable.
 *
 * Note: If the result will be null or Promise<null>, result will not be cached
 * Warning: Use only for pure functions.
 *
 * @collboard-modules-sdk
 *
 */
export declare class FunctionCache<TInput, TOutput> extends Destroyable implements IDestroyable {
    private executor;
    private cache;
    constructor(executor: (input: TInput) => TOutput);
    get function(): (input: TInput) => TOutput;
    execute(input: TInput): TOutput;
    destroy(): Promise<void>;
}
/**
 *
 * TODO: Maybe work with multiple arguments
 * TODO: Maybe do this as decorator
 * TODO: In futute to constructor should be passed storage (which can be time limited)
 *       TODO: This storage from everstorage should be IDestroyable (and here you cound setup if this storage should be isDestroyed with FunctionCache)
 *
 */
