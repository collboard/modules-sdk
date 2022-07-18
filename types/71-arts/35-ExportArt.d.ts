// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVectorData } from 'xyzt';
import { Abstract2dArt } from './26-Abstract2dArt';
export declare enum ExportFormat {
    Native = 'NATIVE',
    Png = 'PNG',
}
/**
 * ExportArt is art for exporting content from the board.
 *
 * @deprecated do this functionality better in the future via FrameArt
 * @collboard-modules-sdk
 */
export declare class ExportArt extends Abstract2dArt {
    format: ExportFormat;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    constructor(format: ExportFormat);
    get topLeftCorner(): IVectorData;
    get bottomRightCorner(): IVectorData;
    isNear(point2: IVectorData): boolean;
    get acceptedAttributes(): never[];
    render(isSelected: boolean): JSX.Element;
}
