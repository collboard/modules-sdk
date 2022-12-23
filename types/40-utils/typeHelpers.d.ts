// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Observable } from 'rxjs';
/**
 * Loadable represents value that is loaded, can be loaded via Promise or can update over a time via Observable.
 */
export declare type Loadable<T> = T | Promise<T> | Observable<T>;
declare type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];
export declare type FlipOptional<T> = Required<Pick<T, OptionalKeys<T>>> &
    Partial<Omit<T, OptionalKeys<T>>> extends infer O
    ? {
          [K in keyof O]: O[K];
      }
    : never;
/**
 * Array with at least one item
 *
 * @collboard-modules-sdk
 */
export declare type ArrayFull<T> = {
    0: T;
} & Array<T>;
/**
 * Just an item or array of items or set of items
 *
 * @deprecated Using this is a bit antipattern use just Array
 * @collboard-modules-sdk
 */
export declare type Arrayable<T> = T | Array<T> | Set<T>;
/**
 * Just an item or array of items with at least one item
 *
 * @collboard-modules-sdk
 */
export declare type ArrayableFull<T> = T | ArrayFull<T>;
export {};
