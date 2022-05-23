// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Registration } from 'destroyable';
import { AbstractSystem } from '../AbstractSystem';
import { IExportFileOptions } from './interfaces/IExportFileOptions';
import { IFileExportSupporter } from './interfaces/IFileExportSupporter';
import { IFramable } from './interfaces/IFramable';
/**
 * ExportSystem creates other files from the board or the part of it.
 * Note: This system is not just for exporting but also saves to native format.
 *
 * @collboard-system
 */
export declare class ExportSystem extends AbstractSystem {
    protected init(): Promise<void>;
    /**
     * @deprecated [🏫] Better mechanism
     */
    registerFrame(frame: IFramable): Registration;
    private fileSupporters;
    registerFileSupport(fileSupporter: IFileExportSupporter): Registration;
    /**
     * @deprecated use exportFiles OR prepareExportFiles instaed
     */
    get supportedMimeTypes(): Set<string>;
    /**
     * Prepares export from the Collboard
     *
     * Note: exportFiles (=do all heavy stuff) vs exportFilesPrepare (=only tells which exports are possible)
     */
    exportFilesPrepare({ scope, isHeavyIncluded, mimeType }: IExportFileOptions): Promise<
        Array<{
            fileSupporter: IFileExportSupporter;
            exporting: (() => Promise<File>) | null;
        }>
    >;
    /**
     * Makes export from the Collboard
     *
     * Note: exportFiles (=do all heavy stuff) vs exportFilesPrepare (=only tells which exports are possible)
     */
    exportFiles(options: IExportFileOptions): Promise<File[]>;
}
/**
 * TODO: [🏫] There should be some mechanism for self-registration (calling of ExportSystem.registerFrame)
 */
