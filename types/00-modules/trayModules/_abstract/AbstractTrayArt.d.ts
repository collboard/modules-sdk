// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { Vector } from 'xyzt';
import { Abstract2dBoxArt } from '../../../71-arts/27-Abstract2dBoxArt';
import { ITrayDefinition } from './TrayItemTypes';
export declare abstract class AbstractTrayArt extends Abstract2dBoxArt {
    itemId: string;
    shift: Vector;
    color: string;
    defaultZIndex: number;
    abstract getDefinition(): ITrayDefinition;
    constructor(itemId: string, shift: Vector);
    private init;
    private get isValid();
    get acceptedAttributes(): string[];
    renderBox(): JSX.Element;
}
