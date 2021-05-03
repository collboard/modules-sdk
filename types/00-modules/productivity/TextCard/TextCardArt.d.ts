
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
import { IListStyle } from '../../../71-arts/50-TextArt';
/**
 * Note: this component is now unused but it is usefull for testing the transform so do not delete it
 */
export declare class TextCardArt extends Abstract2dArt {
    content: string;
    color: string;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    listStyle: IListStyle;
    point1: IVector;
    constructor(content: string, color: string, fontSize: number, bold: boolean, italic: boolean, underline: boolean, listStyle: IListStyle, point1: IVector);
    get size(): Vector;
    get topLeftCorner(): Vector;
    get bottomRightCorner(): Vector;
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): string[];
    render(selected: boolean): JSX.Element;
}

                  