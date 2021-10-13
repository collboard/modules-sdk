// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { Destroyable, IAwaitable, IDestroyable } from 'destroyable';
import { ITaskRunner } from './ITaskRunner';
/**
 * Queue manages tasks running in queue and ensures that every task run (function run) run one after another and not mixed up
 *
 * Imagine timeline of task runs:
 *
 * Input:
 * __🥝🍓🍋_____🍏🍍🍇__🍉_🍌🍒___🥑🍎🍈
 *
 * Output:
 * ___🥝_🍓_🍋______🍏_🍍_🍇__🍉_____🍌_🍒___🥑_🍎_🍈
 *
 *
 * TODO: error handling
 * TODO: maybe debouncing
 * TODO: timeouts
 *
 * @collboard-modules-sdk
 */
export declare class Queue<TTaskResult> extends Destroyable implements IDestroyable, ITaskRunner<TTaskResult> {
    private taskToWait;
    task(runner: () => IAwaitable<TTaskResult>): Promise<TTaskResult>;
    destroy(): Promise<void>;
}
