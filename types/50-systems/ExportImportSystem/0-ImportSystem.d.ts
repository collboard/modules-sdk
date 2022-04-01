// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable, Registration } from 'destroyable';
import { IVectorData } from 'xyzt';
import { AbstractSystem } from '../AbstractSystem';
import { IOngoingOperation } from '../ArtVersionSystem/IOperation';
import { IFileImportSupporter } from './interfaces/IFileImportSupporter';
/**
 * Import system makes support for files which are dragged onto board, imporded or pasted
 * It auto-installs / uninstalls file support modules.
 *
 * @collboard-system
 */
export declare class ImportSystem extends AbstractSystem {
    protected init(): Promise<void>;
    private fileSupporters;
    registerFileSupport(fileSupporter: IFileImportSupporter): Registration;
    /**
     * Imports one file into the board.
     *
     * @returns objects which can be used to undo the importment (typically ongoing operation)
     */
    importFile({
        file,
        boardPosition,
    }: {
        file: Blob | File;
        boardPosition?: IVectorData | null;
    }): Promise<IDestroyable | IOngoingOperation>;
    /**
     * Imports ONE of given files into the board. It will be picked according to priority of file support modules.
     *    1) At first it will pick file supporter module with highest priority and gives it all provided files.
     *    2) At second (if the first module refuse to import all of them (by calling next)) it will pick next module
     *     3) And so on.
     * Typically this is usefull when you have the same content in multiple formats like pasting from the clipboard.
     *
     * @returns objects which can be used to undo the importment (typically ongoing operation)
     */
    importOneOfFiles({
        files,
        boardPosition,
    }: {
        files: Array<Blob | File>;
        boardPosition?: IVectorData | null;
    }): Promise<IDestroyable | IOngoingOperation>;
}
/**
 * TODO: Importing URLs like YouTube
 */
