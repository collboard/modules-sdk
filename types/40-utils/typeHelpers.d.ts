// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
/**
 * @collboard-modules-sdk
 */
export declare type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];
/**
 * @collboard-modules-sdk
 */
export declare type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys];
/**
 * Make partial only some keys
 * @collboard-modules-sdk
 */
export declare type PickPartial<Type, Keys extends keyof Type> = Partial<Pick<Type, Keys>> & Omit<Type, Keys>;
/**
 * Array with at least one item
 *
 * @collboard-modules-sdk
 */
export declare type ArrayFull<T> = {
    0: T;
} & T[];
/**
 * Just an item or array of items or set of items
 *
 * @collboard-modules-sdk
 */
export declare type IArrayable<T> = T | T[] | Set<T>;
/**
 * Just an item or array of items with at least one item
 *
 * @collboard-modules-sdk
 */
export declare type IArrayableFull<T> = T | ArrayFull<T>;
/**
 * Array which can be wrapped in a Promise and all items can be also wrapped in a Promise
 *
 * @collboard-modules-sdk
 */
export declare type PromisableArray<T> = Promisable<Array<Promisable<T>>>;
