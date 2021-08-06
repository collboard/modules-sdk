// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { AbstractSystem } from '../AbstractSystem';
import { IFileImportSupporter } from './interfaces/IFileImportSupporter';
import { IImportFileOptions } from './interfaces/IImportFileOptions';
/**
 * Import system makes support for files which are dragged onto board, imporded or pasted
 * It auto-install/uninstall file support modules.
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
