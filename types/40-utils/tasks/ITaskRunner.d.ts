// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from '../destroyables/IDestroyable';
import { IAwaitable } from '../IAwaitable';
export interface ITaskRunner<TTaskResult> extends IDestroyable {
    task(runner: () => IAwaitable<TTaskResult>): Promise<TTaskResult>;
}
