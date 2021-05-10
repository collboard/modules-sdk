
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /**
 * @collboard-modules-sdk
 */
export declare type IFactory<T> = () => T;
/**
 * @collboard-modules-sdk
 */
export declare type IFactorable<T> = T | IFactory<T>;
/**
 *
 * @collboard-modules-sdk
 */
export declare function factor<T>(factorable: IFactorable<T>): T;

                  