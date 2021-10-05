// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IAwaitable, IDestroyable } from 'destroyable';
export interface ITaskRunner<TTaskResult> extends IDestroyable {
    task(runner: () => IAwaitable<TTaskResult>): Promise<TTaskResult>;
}
