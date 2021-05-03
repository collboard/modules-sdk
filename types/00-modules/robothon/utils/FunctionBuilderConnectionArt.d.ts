
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
export declare class FunctionBuilderConnectionArt extends Abstract2dArt {
    start: IVector;
    private color;
    end: IVector;
    constructor(start: IVector, color: string);
    acceptedAttributes: never[];
    defaultZIndex: number;
    get topLeftCorner(): Vector;
    get bottomRightCorner(): Vector;
    render(): JSX.Element;
}

                  