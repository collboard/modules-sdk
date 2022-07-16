// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BoundingBox } from 'xyzt';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
import { IExportFileOptions } from './IExportFileOptions';
import { IExportScope } from './IExportScope';
/**
 * Options and util provided for the exporter to as a material to create exported data
 * Note: Do not need to include the systems because systems are already available in registree module> systems: ISystems;
 *
 * @collboard-modules-sdk
 */
export interface IFileExportSupporterOptions extends Required<IExportFileOptions> {
    /**
     * Arts to export
     */
    artContainers: Array<IArtContainer>;
    /**
     * Scope of the export
     */
    boundingBox: BoundingBox;
    /**
     * Name of the board
     */
    boardname: string;
    /**
     * Default filename
     * Note: It can be overridden by returning File with different name
     */
    defaultFilename: string;
    /**
     * Scope of the export
     *
     * Note: Usually you do not need to use this because artContainers are already filtered by this scope
     */
    scope: IExportScope;
}
/**
 * Information about one art to export
 */
export interface IArtContainer {
    art: Abstract2dArt;
    element: HTMLElement | null;
}
/**
 * TODO: Put background option in IFileExportOptions
 * TODO: For HTML export put center (alongside with already given boundingBox)
 * TODO: [🌚] Some way how to chain exports - pass useOtherExport util into IFileExportOptions
 */
