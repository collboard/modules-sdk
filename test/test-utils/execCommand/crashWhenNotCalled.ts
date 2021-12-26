import { forTime } from 'waitasecond';

export function crashWhenNotCalled(timeout: number): { callback: () => void; result: Promise<void> } {
    let wasCalled = false;
    let callback = () => {
        resolveResult();
        wasCalled = true;
    };
    let resolveResult: () => void;

    const result = new Promise<void>(async (resolve, reject) => {
        resolveResult = resolve;
        await forTime(timeout);

        if (wasCalled) {
            resolve();
        } else {
            reject(new Error(`Command was not called in ${timeout}ms`));
        }
    });

    return {
        callback,
        result,
    };
}

/**
 * TODO: Probbablt this should be part of waitasecond library with some nicer fluent API
 */
