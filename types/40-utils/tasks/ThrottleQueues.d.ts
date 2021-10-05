// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable, IDestroyable } from 'destroyable';
import { IThrottleQueueOptions, ThrottleQueue } from './ThrottleQueue';
/**
 * @collboard-modules-sdk
 */
export declare class ThrottleQueues<TName, TTaskResult> extends Destroyable implements IDestroyable {
    private options;
    private throttleQueues;
    constructor(options: IThrottleQueueOptions);
    getThrottleQueue(key: TName): ThrottleQueue<TTaskResult>;
    destroy(): Promise<void>;
}
