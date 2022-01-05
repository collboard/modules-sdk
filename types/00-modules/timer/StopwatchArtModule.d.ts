// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Vector } from 'xyzt';
import { Abstract2dArt } from '../../71-arts/26-Abstract2dArt';
export declare class StopwatchArt extends Abstract2dArt {
    static serializeName: string;
    running: boolean;
    elapsed: number;
    timestamp: number;
    private privateSize;
    constructor(shift: Vector);
    start(): void;
    stop(): void;
    reset(): void;
    set stopwatchControls(operation: number);
    get stopwatchControls(): number;
    get acceptedAttributes(): string[];
    get topLeftCorner(): import('xyzt').IVectorObject;
    get bottomRightCorner(): Vector;
    render(): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
