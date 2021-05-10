
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IAwaitable } from '../IAwaitable';
import { Destroyable } from './Destroyable';
import { IDestroyable } from './IDestroyable';
/**
 * @collboard-modules-sdk
 */
export interface IQueueOptions {
    /**
     * Key does not effect queue behaviour, it solves only for identification purposes.
     */
    key?: any;
    throttler: () => Promise<void>;
}
/**
 * Queue manages tasks running in queue and ensures that every task run (function run) run one after another and not mixed up
 *
 * TODO: error handling
 * TODO: maybe debouncing
 * TODO: timeouts
 *
 * @collboard-modules-sdk
 */
export declare class Queue<T> extends Destroyable implements IDestroyable {
    private options;
    private runner;
    private throttles;
    private result;
    constructor(options: IQueueOptions);
    task(runner: () => IAwaitable<T>): Promise<T>;
    destroy(): Promise<void>;
}

                  