import { IAwaitable } from './IAwaitable';
import { IDestroyable } from './IDestroyable';

/**
 *  TODO: Take from independent library when available
 */
export type ITeardownLogic = (() => IAwaitable<void>) | IDestroyable;

/**
 *
 * TODO: Take from independent library when available
 */
export async function teardown(teardownLogic: ITeardownLogic): Promise<void> {
    if (typeof teardownLogic === 'function') {
        return teardownLogic();
    } else {
        return await teardownLogic.destroy();
    }
}

// TODO: Make compatible with IAwaitable<IDestroyable | undefined>
// TODO: Use in Registration.join
