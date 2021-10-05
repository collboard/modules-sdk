// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { FunctionBuilderVariable } from './FunctionBuilderVariable';
export declare type FunctionBuilderDefinition = FunctionBuilderFunction | FunctionBuilderConstant;
export interface FunctionBuilderFunction {
    title: string;
    variables: {
        [key: string]: FunctionBuilderVariable;
    };
    func: (
        x: number,
        variables: {
            [key: string]: number;
        },
    ) => number;
}
export interface FunctionBuilderConstant {
    title: string;
    constant: number;
}
export declare function isFunctionBuilderFunction(
    functionDefinition: FunctionBuilderDefinition,
): functionDefinition is FunctionBuilderFunction;
