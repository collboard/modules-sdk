
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /**
 * @collboard SDK
 */
export declare type IFactory<T> = () => T;
/**
 * @collboard SDK
 */
export declare type IFactorable<T> = T | IFactory<T>;
/**
 *
 * @collboard SDK
 */
export declare function factor<T>(factorable: IFactorable<T>): T;

                  