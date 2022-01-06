// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { AbstractSystem } from '../AbstractSystem';
import { IFileImportSupporter } from './interfaces/IFileImportSupporter';
import { IImportFileOptions } from './interfaces/IImportFileOptions';
/**
 * Import system makes support for files which are dragged onto board, imporded or pasted
 * It auto-installs / uninstalls file support modules.
 *
 * @collboard-system
 */
export declare class ImportSystem extends AbstractSystem {
    protected init(): Promise<void>;
    private fileSupporters;
    registerFileSupport(fileSupporter: IFileImportSupporter): import('destroyable').Registration;
    get supportedMimeTypes(): Set<string>;
    importFile({ boardPosition, file: fileInput }: IImportFileOptions): Promise<void>;
}
