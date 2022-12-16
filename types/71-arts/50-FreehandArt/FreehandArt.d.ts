// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { TouchFrame } from 'touchcontroller';
import { IVectorData, Vector } from 'xyzt';
import { number_positive, string_color } from '../../40-utils/typeAliases';
import { Abstract2dArt } from '../26-Abstract2dArt';
/**
 * Handwritten free line with lot of segments
 *
 * @collboard-modules-sdk
 */
export declare class FreehandArt extends Abstract2dArt {
    static serializeName: string;
    static manifest: {
        name: string;
    };
    frames: Array<TouchFrame>;
    smoothing: 0 | number_positive;
    color: string_color;
    weight: 0 | number_positive;
    private __path?;
    private __minX?;
    private __maxX?;
    private __minY?;
    private __maxY?;
    constructor(frames: Array<TouchFrame>, color: string_color, weight: number);
    get topLeft(): Vector;
    get bottomRight(): Vector;
    get size(): IVectorData;
    set size(newSize: IVectorData);
    isNear(pointToTest: IVectorData): boolean;
    get acceptedAttributes(): string[];
    pushFrame(frame: TouchFrame): this;
    /**
     * @deprecated [🍒] remove this method
     */
    private calculateBoundingBox;
    private calculatePath;
    render(isSelected: boolean): JSX.Element;
}
/**
 * TODO: [👀] Focus cursor from other users in unfinished Freehands
 * TODO: FreehandArt with just 1 frame should be invalid
 * TODO: Instead of x/y pairs use Vector
 * TODO: [✏️] Fix> react-dom.development.js:630 Error: <svg> attribute width: Expected length, "NaN".
 * TODO: Probbably (maybe in html/css values MUST be whole integers): ACTRY To be infinitelly zoomable avoid using Math.ceil, Math.floor, Math.round,...
 * TODO: [🚉] There should be some rounding optimization for svg numbers (for example path)
 *       From: d="M60.00000000000006 70.4999999999999 L60.00000000000006 70.4999999999999...
 *       To:   d="M60 70.5 L60 70.5...
 *
 * TODO: [🍎]  Use IMaterial instead of color
 * TODO: [🍎]  Use IShape instead of weight, points,...
 * TODO: [🕺] Rename weight => spotSize, edgeSize (as it is in PolygonArt and FreehandArt)
 * TODO: [🎚️] Implement IArt
 * Note: [🌡️]
 * TODO: [1] Detect collisions from bézier curve not original points
 */
