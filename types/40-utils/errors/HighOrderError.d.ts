
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /**
 * HighOrderError is high order error to wrap lower order error (like parsing).
 * @see https://www.pavolhejny.com/rozsirene-informace-o-chybach/
 *
 * @collboard SDK
 */
export declare class HighOrderError extends Error {
    readonly lowOrderError: Error;
    readonly name = "HighOrderError";
    constructor(lowOrderError: Error, highOrderMessage: string);
    get stack(): string;
}

                  