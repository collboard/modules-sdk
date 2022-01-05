// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BoundingBox } from 'xyzt';
export declare type IPlotColor = string;
export interface IPlotObject {
    color?: IPlotColor;
    width?: number;
}
export interface IPlotObjects {
    func?: IPlotObject;
    axis?: IPlotObject;
    grid?: IPlotObject;
    labels?: IPlotObject;
}
export interface IPlotOptions {
    canvas: HTMLCanvasElement;
    func: (x: number) => number | null;
    boundingBox: BoundingBox;
    objects?: IPlotObjects;
}
