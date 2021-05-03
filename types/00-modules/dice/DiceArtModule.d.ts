
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { Abstract2dArt } from '../../71-arts/26-Abstract2dArt';
export declare class DiceArt extends Abstract2dArt {
    sides: number;
    value: number;
    rotation: number;
    private privateSize;
    constructor(shift: IVector, sides: number);
    random(): number;
    roll(): void;
    set diceControls(operation: number);
    get diceControls(): number;
    set diceSides(sides: number);
    get diceSides(): number;
    get acceptedAttributes(): string[];
    get topLeftCorner(): import("xyzt").IVectorObject;
    get bottomRightCorner(): Vector;
    private renderDots;
    render(): JSX.Element;
}

                  