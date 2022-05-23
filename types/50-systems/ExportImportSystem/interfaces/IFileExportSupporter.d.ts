// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Promisable } from 'type-fest';
import { IFactorable } from '../../../40-utils/IFactory';
import { string_mime_type } from '../../../40-utils/typeAliases';
import { IFileExportOptions } from './IFileExportOptions';
export declare type IFileExportSupporter = IFileExportSupporterHeavy | IFileExportSupporterLight;
/**
 * This represents support for one file type export
 */
/**
 * This represents support for heavy (=takes lot of resources) file type export
 */
interface IFileExportSupporterHeavy extends IFileExportSupporterCore {
    isHeavy: true;
    export(options: IFileExportOptions): Promisable<(() => Promisable<IExported>) | null>;
}
/**
 * This represents support for light (=it is instant and cheap to compute) file type export
 */
interface IFileExportSupporterLight extends IFileExportSupporterCore {
    isHeavy: false;
    export(options: IFileExportOptions): Promisable<IExported | null>;
}
/**
 * This represents support for one file type export
 */
interface IFileExportSupporterCore {
    /**
     * Export system will take one export supporter in one mimeType with highest priority
     */
    priority: number;
    /**
     * Indicated if this export is hard to perform
     *
     * This will determine if export system will try to perform export everytime before potential copy to clipboard or only on demand
     */
    isHeavy: boolean;
    /**
     * importFile will be only called when mime type is matching
     * This is also indicator for auto-instllation mechanism
     */
    mimeType: string_mime_type;
    /**
     * Process of exporting arts to file
     *
     * Function will be provided arts, dom element and few other things in IArtContainer
     * It should do one of two things:
     * 1) Return exported data
     * 2) Return function that will be called to actually perform hard work of exporting and this will return exported data
     * 3) Return null - if it is not able to export
     */
    export(options: IFileExportOptions): Promisable<IFactorable<Promisable<IExported>> | null>;
}
/**
 * Exported data
 */
declare type IExported = File | Blob | string | JSX.Element;
export {};
/**
 * TODO: Use isHeavy in auto install mechanism
 * TODO: [🌿] Use priority in auto install mechanism
 */
