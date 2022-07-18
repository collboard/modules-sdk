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
export declare class StopwatchArt extends Abstract2dArt {
    static serializeName: string;
    static manifest: {
        name: string;
    };
    running: boolean;
    elapsed: number;
    timestamp: number;
    private __size;
    constructor(shift: Vector);
    start(): void;
    stop(): void;
    reset(): void;
    set stopwatchControls(value: ITimerAndStopwatchControls);
    get stopwatchControls(): ITimerAndStopwatchControls;
    get acceptedAttributes(): string[];
    get topLeftCorner(): IVectorData;
    get bottomRightCorner(): Vector;
    render(): JSX.Element;
}
/**
 * Note: In future this file will we in independent repository as external module.
 */
