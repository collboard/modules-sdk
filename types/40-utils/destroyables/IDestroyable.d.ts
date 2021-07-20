// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IAwaitable } from '../IAwaitable';
/**
 * Interface, all destroyable objects implement
 *
 * @collboard-modules-sdk
 */
export interface IDestroyable {
    /**
     * Is destroyed?
     */
    readonly destroyed: boolean;
    /**
     * Destroy the object
     */
    destroy(): IAwaitable<void>;
}
