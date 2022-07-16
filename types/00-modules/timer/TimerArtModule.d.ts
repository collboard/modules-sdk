// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVectorData, Vector } from 'xyzt';
import { Abstract2dArt } from '../../71-arts/26-Abstract2dArt';
import { ITimerAndStopwatchControls } from './TimerControlsAttributeModule';
export declare class TimerArt extends Abstract2dArt {
    millis: number;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    running: boolean;
    remaining: number;
    timestamp: number;
    private privateSize;
    constructor(shift: IVectorData, millis: number);
    start(): void;
    stop(): void;
    reset(): void;
    set timerControls(value: ITimerAndStopwatchControls);
    get timerControls(): ITimerAndStopwatchControls;
    set timerTime(millis: number);
    get timerTime(): number;
    get acceptedAttributes(): string[];
    get topLeftCorner(): IVectorData;
    get bottomRightCorner(): Vector;
    get warningThreshold(): number;
    render(): JSX.Element;
}
/**
 * Note: Number is just a file prefix to feep it on the top of file list.
 */
