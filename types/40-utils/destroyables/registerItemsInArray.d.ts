
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IRegisterItemsOptions } from './IRegisterItemsOptions';
import { Registration } from './Registration';
/**
 * Push item into array and return object representing this pushment that can be destroyed
 * Warning: this utility makes mutations on base record object
 *
 * @collboard-modules-sdk
 */
export declare function registerItemsInArray<TItem>({ base, add, isEqual, collisionStrategy, }: IRegisterItemsOptions<TItem[], TItem>): Registration;

                  