// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { TouchFrame } from 'touchcontroller';
import { IVectorData, Vector } from 'xyzt';
import { string_color } from './../40-utils/typeAliases';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * @collboard-modules-sdk
 */
export declare class FreehandArt extends Abstract2dArt {
    static serializeName: string;
    static manifest: {
        name: string;
    };
    frames: Array<TouchFrame>;
    color: string_color;
    weight: number;
    private minX;
    private maxX;
    private minY;
    private maxY;
    constructor(frames: Array<TouchFrame>, color: string_color, weight: number);
    private get path();
    get topLeft(): Vector;
    get bottomRight(): Vector;
    get size(): IVectorData;
    set size(newSize: IVectorData);
    isNear(pointToTest: IVectorData): boolean;
    get acceptedAttributes(): string[];
    private calculateBoundingBox;
    render(isSelected: boolean): JSX.Element;
}
/**
 * TODO: Instead of x/y pairs use Vector
 * TODO: [✏️] Fix> react-dom.development.js:630 Error: <svg> attribute width: Expected length, "NaN".
 * TODO: Probbably (maybe in html/css values MUST be whole integers): ACTRY To be infinitelly zoomable avoid using Math.ceil, Math.floor, Math.round,...
 */
