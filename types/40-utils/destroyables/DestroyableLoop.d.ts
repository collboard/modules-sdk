// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable } from './Destroyable';
/**
 * @collboard-modules-sdk
 */
export declare class DestroyableLoop extends Destroyable {
    constructor(executor: (amIDestroyed: () => boolean) => Promise<void>);
}
