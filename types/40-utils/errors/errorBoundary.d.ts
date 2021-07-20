// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IAwaitable } from 'everstorage';
import { IFactory } from '../IFactory';
/**
 * This util catches an error and rethrows more meaningfull error messege to better debugging
 * TODO: More oprions how to handle and rewrap the error - for example by a function
 *
 * @collboard-modules-sdk
 */
export declare function errorBoundary<T>(valueFactory: IFactory<IAwaitable<T>>, errorMessage: string): Promise<T>;
