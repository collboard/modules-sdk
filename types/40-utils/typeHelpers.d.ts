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
export declare type Loadable<TValue> = TValue | Promise<TValue> | Observable<TValue>;
declare type OptionalKeys<TObject extends object> = {
    [K in keyof TObject]-?: {} extends Pick<TObject, K> ? K : never;
}[keyof TObject];
export declare type FlipOptional<TObject extends object> = Required<Pick<TObject, OptionalKeys<TObject>>> &
    Partial<Omit<TObject, OptionalKeys<TObject>>> extends infer O
    ? {
          [K in keyof O]: O[K];
      }
    : never;
/**
 * Removes an index signature from object
 * Keeps only known properies
 *
 * @see https://stackoverflow.com/a/51956054/10647824
 */
export declare type RemoveIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};
/**
 * TODO: Maybe rename RemoveIndex to RemoveIndexSignature or OnlyKnown
 */
/**
 * Array with at least one item
 *
 * @collboard-modules-sdk
 */
export declare type ArrayFull<TItem> = {
    0: TItem;
} & Array<TItem>;
/**
 * Just an item or array of items or set of items
 *
 * @deprecated Using this is a bit antipattern use just Array
 * @collboard-modules-sdk
 */
export declare type Arrayable<TItem> = TItem | Array<TItem> | Set<TItem>;
/**
 * Just an item or array of items with at least one item
 *
 * @collboard-modules-sdk
 */
export declare type ArrayableFull<TItem> = TItem | ArrayFull<TItem>;
export {};
