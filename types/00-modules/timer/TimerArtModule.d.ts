// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { Abstract2dArt } from '../../71-arts/26-Abstract2dArt';
export declare class TimerArt extends Abstract2dArt {
    millis: number;
    running: boolean;
    remaining: number;
    timestamp: number;
    private privateSize;
    constructor(shift: IVector, millis: number);
    start(): void;
    stop(): void;
    reset(): void;
    set timerControls(operation: number);
    get timerControls(): number;
    set timerTime(millis: number);
    get timerTime(): number;
    get acceptedAttributes(): string[];
    get topLeftCorner(): import('xyzt').IVectorObject;
    get bottomRightCorner(): Vector;
    get warningThreshold(): number;
    render(): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
