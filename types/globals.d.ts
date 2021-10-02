// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IAwaitable } from 'destroyable';
declare global {
    interface Array<T> {
        /**
         * Returns the elements of an array that meet the condition specified in a callback function.
         * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
         */
        filterAsync(
            predicate: (value: T, index: number, array: T[]) => IAwaitable<unknown>,
            thisArg?: any,
        ): Promise<T[]>;
    }
}
/**
 * In this function, we concentrate all global changes to the javascript runtime environment.
 * We know that doing global changes like extending prototypes is not a good practice but in few cases it is the most reasonable solution
 */
export declare function declareGlobals(): void;
