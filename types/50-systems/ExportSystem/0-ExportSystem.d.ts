// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { Abstract2dArt } from './../../71-arts/26-Abstract2dArt';
import { IExportFileOptions } from './interfaces/IExportFileOptions';
import { IFileExportSupporter } from './interfaces/IFileExportSupporter';
import { IFramable } from './interfaces/IFramable';
import { IPreparedFileExport } from './interfaces/IPreparedFileExport';
/**
 * ExportSystem creates other files from the board or the part of it.
 * Note: This system is not just for exporting but also saves to native format.
 *
 * @collboard-system
 */
export declare class ExportSystem extends AbstractSystem {
    private proxyUrl;
    constructor(systems: ISystemsExtended, proxyUrl: URL);
    protected init(): Promise<void>;
    private fileSupporters;
    registerFileSupport(fileSupporter: IFileExportSupporter): import('destroyable').Registration;
    /**
     * @deprecated use exportFiles OR prepareExportFiles instaed
     */
    get supportedMimeTypes(): Set<string>;
    /**
     * Get all arts that can be exported OR are frames
     */
    private getAllArts;
    /**
     * Get all possible exports frames
     */
    getFrames(): Promise<Array<IFramable>>;
    /**
     * Get all arts (but non frames)
     */
    getArts(): Promise<Array<Abstract2dArt>>;
    private forEssentialFileSupporters;
    /**
     * Prepares export from the Collboard
     *
     * Note: exportFiles (=do all heavy stuff) vs exportFilesPrepare (=only tells which exports are possible)
     */
    exportFilesPrepare(options: IExportFileOptions): Promise<Array<IPreparedFileExport>>;
    /**
     * Makes export from the Collboard
     *
     * Note: exportFile(s) (=do all heavy stuff) vs exportFilesPrepare (=only tells which exports are possible)
     */
    exportFiles(options: IExportFileOptions): Promise<Array<File>>;
    /**
     * Makes export of one file from the Collboard
     * When there is no file to export it throws error
     *
     * Note: exportFile(s) (=do all heavy stuff) vs exportFilesPrepare (=only tells which exports are possible)
     */
    exportFile(options: IExportFileOptions): Promise<File>;
}
