// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_mime_type } from '../../../40-utils/typeAliases';
import { IArtContainer } from './IArtContainer';
/**
 * This represents support for one file type export
 * ImportSystem will call file supporter it will either import file into the board OR call next to pass responsibility to another supporter
 */
export interface IFileExportSupporter {
    /**
     * Export system will take one export supporter in one mimeType with highest priority
     */
    priority: number;
    /**
     * importFile will be only called when mime type is matching
     * This is also indicator for auto-instllation mechanism
     */
    mimeType: string_mime_type;
    /**
     *  exportFile it will be provided arts, dom element and few other things and should return blob or text of exported file
     *  If exporter for some reason cannot do an export it can return null.
     */
    createFile: (artContainers: IArtContainer[]) => Promise<Blob | string | null>;
}
