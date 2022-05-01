// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
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
