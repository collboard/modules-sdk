// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable, IDestroyable } from 'destroyable';
import { Promisable } from 'type-fest';
import { ITaskRunner } from './ITaskRunner';
/**
 * @collboard-modules-sdk
 */
export interface IThrottleQueueOptions {
    throttler: () => Promise<void>;
}
/**
 * ThrottleQueue ensures that in every time block separated by throttler will be runned only one task (function run)
 *
 * Imagine timeline of task runs:
 *
 * Input:
 * __🥝🍓🍋_____🍏🍍🍇__🍉_🍌🍒___🥑🍎🍈
 *
 * Output:
 * _________🍋🍋🍋_________🍇🍇🍇_🍉_🍒🍒_🍈🍈🍈
 *
 * TODO: Error handling
 * TODO: Probably debouncing
 * TODO: timeouts
 *
 * @collboard-modules-sdk
 */
export declare class ThrottleQueue<TTaskResult> extends Destroyable implements ITaskRunner<TTaskResult>, IDestroyable {
    private options;
    private runner;
    private throttles;
    private result;
    constructor(options: IThrottleQueueOptions);
    task(runner: () => Promisable<TTaskResult>): Promise<TTaskResult>;
}
/**
 * TODO: [0] This should be maybe named DebounceQueue?
 */
