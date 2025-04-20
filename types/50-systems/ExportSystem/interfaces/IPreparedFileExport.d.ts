// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IExportFileOptions } from './IExportFileOptions';
import { IFileExportSupporter } from './IFileExportSupporter';
import { IFileExportSupporterOptions } from './IFileExportSupporterOptions';
/**
 * Prepared one file export OR export which can not be done
 */
export type IPreparedFileExport = IPreparedFileExporting | IPreparedFileVoidExport;
/**
 * Prepared one file export in progress ready to do the hard work by calling `exporting()`
 */
export interface IPreparedFileExporting extends IPreparedFileExportCommon {
    exporting(): Promise<File>;
}
/**
 * File export which can not be done
 */
export interface IPreparedFileVoidExport extends IPreparedFileExportCommon {
    exporting: null;
}
export interface IPreparedFileExportCommon {
    options: IExportFileOptions;
    supporterOptions: IFileExportSupporterOptions;
    fileSupporter: IFileExportSupporter;
}
