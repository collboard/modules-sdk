
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { Destroyable } from './Destroyable';
import { IDestroyable } from './IDestroyable';
import { IQueueOptions, Queue } from './Queue';
/**
 * @collboard SDK
 */
export declare class Queues<K, V> extends Destroyable implements IDestroyable {
    private options;
    private queues;
    constructor(options: Omit<IQueueOptions, 'key'>);
    getQueue(key: K): Queue<V>;
    destroy(): Promise<void>;
}

                  