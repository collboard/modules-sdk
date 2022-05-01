// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
declare global {
    interface Array<T> {
        /**
         * Async version of Array.prototype.filter
         * Returns the elements of an array that meet the condition specified in a callback function.
         * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
         */
        filterAsync(
            predicate: (value: T, index: number, array: T[]) => Promisable<unknown>,
            thisArg?: any,
        ): Promise<T[]>;
        /**
         * Async version of Array.prototype.map
         * Calls a defined callback function on each element of an array, and returns an array that contains the results.
         * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
         */
        mapAsync<U>(predicate: (value: T, index: number, array: T[]) => Promisable<U>, thisArg?: any): Promise<U[]>;
    }
}
/**
 * In this function, we concentrate all global changes to the javascript runtime environment.
 * We know that doing global changes like extending prototypes is not a good practice but in few cases it is the most reasonable solution
 */
export declare function declareGlobals(): void;
