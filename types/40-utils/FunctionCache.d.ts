
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IDestroyable } from 'everstorage';
import { Destroyable } from './destroyables/Destroyable';
/**
 * Wraps one function and cache its results
 * Note: Output is always Promise because it does not make sence to cache easyly reachable results
 *
 * TODO: Maybe do this as decorator
 * TODO: In futute to constructor should be passed storage (which can be time limited)
 *       TODO: This storage from everstorage should be IDestroyable (and here you cound setup if this storage should be destroyed with FunctionCache)
 */
export declare class FunctionCache<TInput, TOutput> extends Destroyable implements IDestroyable {
    private executor;
    constructor(executor: (input: TInput) => Promise<TOutput>);
    execute(input: TInput): Promise<TOutput>;
    destroy(): Promise<void>;
}

                  