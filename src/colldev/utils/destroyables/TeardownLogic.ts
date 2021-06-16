import { IAwaitable } from './IAwaitable';
import { IDestroyable } from './IDestroyable';

/**
 * ⚠️Warning: THIS IS A COPY. Do not edit it here but:
 * https://github.com/collboard/collboard/tree/refactoring/persisting-connector-advanced/src/40-utils/destroyables
 *
 */
export type ITeardownLogic = (() => IAwaitable<void>) | IDestroyable;

/**
 * ⚠️Warning: THIS IS A COPY. Do not edit it here but:
 * https://github.com/collboard/collboard/tree/refactoring/persisting-connector-advanced/src/40-utils/destroyables
 *
 */
export async function teardown(teardownLogic: ITeardownLogic): Promise<void> {
    if (typeof teardownLogic === 'function') {
        return teardownLogic();
    } else {
        return await teardownLogic.destroy();
    }
}
