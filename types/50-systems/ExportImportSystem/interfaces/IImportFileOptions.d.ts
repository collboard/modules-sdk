// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData } from 'xyzt';
export interface IImportFilesOptions extends IImportFileOptionsBase {
    files: Array<Blob | File>;
}
export interface IImportFileOptions extends IImportFileOptionsBase {
    file: Blob | File;
}
interface IImportFileOptionsBase {
    boardPosition?: IVectorData | null;
}
export {};
/**
 * TODO: Use here xyzt coords to allow consumer to use different coord system and reference for example screenCenteredPosition
 * TODO: Better anotations:
 * > When you provide multiple files it will import ONLY one
 * > Firstly it will look at the first file and try to import it
 * > If there is no support for it it will go and try second file...
 * > This mechanism is primarlly usefull for pasting from clipboard.
 */
