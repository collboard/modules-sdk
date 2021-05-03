
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { Abstract2dArt } from '../../71-arts/26-Abstract2dArt';
export declare class CurtainArt extends Abstract2dArt {
    visible: boolean;
    color: string;
    defaultZIndex: number;
    private privateSize;
    constructor(shift: IVector);
    get size(): IVector;
    set size(size: IVector);
    get curtainVisible(): number;
    set curtainVisible(toggle: number);
    get acceptedAttributes(): string[];
    get topLeftCorner(): import("xyzt").IVectorObject;
    get bottomRightCorner(): Vector;
    render(): JSX.Element;
}

                  