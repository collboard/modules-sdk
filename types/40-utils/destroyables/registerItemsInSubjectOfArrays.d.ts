
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { Subject } from 'rxjs';
import { Registration } from './Registration';
/**
 * @deprecated TODO: instead of this interface use shared IRegisterItemsOptions
 */
interface IRegisterItemsInSubjectOfArrays<T> {
    /**
     * TODO: Allow this to be omited in case of base is BehaviorSubject
     */
    currentValue: T[];
    base: Subject<T[]>;
    add: T[];
    compare?: (a: T, b: T) => boolean;
    errorReporting?: (error: Error) => void;
}
/**
 * Push item into array of RxJS subjects and return object representing this pushment that can be destroyed
 * @param base will automatically triggers next in given subject and when unregistered triggers another one
 * @param add is array of items which will be added into base
 */
export declare function registerItemsInSubjectOfArrays<T>({ currentValue, base, add, compare, errorReporting, }: IRegisterItemsInSubjectOfArrays<T>): Registration;
export {};

                  