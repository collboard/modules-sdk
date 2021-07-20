// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IAwaitable } from '../IAwaitable';
import { IDestroyable } from './IDestroyable';
/**
 * @collboard-modules-sdk
 */
export declare type ITeardownLogic = (() => IAwaitable<void>) | IDestroyable;
/**
 *
 * @collboard-modules-sdk
 */
export declare function teardown(teardownLogic: ITeardownLogic): Promise<void>;