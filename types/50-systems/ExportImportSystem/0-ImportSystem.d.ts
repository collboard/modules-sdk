// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable, Registration } from 'destroyable';
import { IVectorData } from 'xyzt';
import { string_url } from '../../40-utils/typeAliases';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../AbstractSystem';
import { IOngoingMaterialOperation } from '../ArtVersionSystem/IOperation';
import { IFileImportSupporter } from './interfaces/IFileImportSupporter';
interface IImportOptions {
    boardPosition?: IVectorData | null;
    /**
     * If true, the notifications will be shown.
     * @default true
     */
    isNotified?: boolean;
    /**
     * If true, the imported will be selected if supporter wants.
     * @default true
     */
    isSelected?: boolean;
    /**
     * If true, the imported will be persisted (=saved).
     * @default true
     */
    isPersisted?: boolean;
}
/**
 * Import system makes support for files which are dragged onto board, imporded or pasted
 * It auto-installs / uninstalls file support modules.
 *
 * @collboard-system
 */
export declare class ImportSystem extends AbstractSystem {
    private proxyUrl;
    constructor(systems: ISystemsExtended, proxyUrl: string_url);
    protected init(): Promise<void>;
    private fileSupporters;
    registerFileSupport(fileSupporter: IFileImportSupporter): Registration;
    /**
     * Imports content from URL
     *
     * @returns objects which can be used to undo the importment (typically ongoing operation)
     *
     *  Note: If you want to fetch and import content of URL and materialize it, use the importFile with the util fetchAsFile
     */
    importUrl(
        options: IImportOptions & {
            src: URL | string_url;
        },
    ): Promise<IOngoingMaterialOperation | IDestroyable>;
    /**
     * Imports one file into the board.
     *
     * @returns objects which can be used to undo the importment (typically ongoing operation)
     */
    importFile(
        options: IImportOptions & {
            file: Blob | File;
        },
    ): Promise<IOngoingMaterialOperation | IDestroyable>;
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
        isNotified,
        isSelected,
        isPersisted,
        files,
        boardPosition,
    }: IImportOptions & {
        files: Array<Blob | File>;
    }): Promise<IOngoingMaterialOperation | IDestroyable>;
}
export {};
/**
 * TODO: Importing URLs like YouTube
 */
