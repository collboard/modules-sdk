// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable } from '../destroyables/Destroyable';
import { IDestroyable } from '../destroyables/IDestroyable';
import { IAwaitable } from '../IAwaitable';
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
 *
 * TODO: error handling
 * TODO: maybe debouncing
 * TODO: timeouts
 *
 * @collboard-modules-sdk
 */
export declare class ThrottleQueue<TTaskResult> extends Destroyable implements IDestroyable, ITaskRunner<TTaskResult> {
    private options;
    private runner;
    private throttles;
    private result;
    constructor(options: IThrottleQueueOptions);
    task(runner: () => IAwaitable<TTaskResult>): Promise<TTaskResult>;
    destroy(): Promise<void>;
}
