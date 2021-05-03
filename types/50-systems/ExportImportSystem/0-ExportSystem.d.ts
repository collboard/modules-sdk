
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IVector } from 'xyzt';
import { Registration } from '../../40-utils/destroyables/Registration';
import { AbstractSystem } from '../AbstractSystem';
import { IExportFileOptions } from './interfaces/IExportFileOptions';
import { IFileExportSupporter } from './interfaces/IFileExportSupporter';
export interface IFramable {
    topLeftCorner: IVector;
    bottomRightCorner: IVector;
}
/**
 * ExportSystem creates other files from the board or the part of it.
 * Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.
 * Note: This  system is not just for exporting but also saves to native format.
 */
export declare class ExportSystem extends AbstractSystem {
    protected init(): Promise<void>;
    registerFrame(frame: IFramable): Registration;
    private fileSupporters;
    registerFileSupport(fileSupporter: IFileExportSupporter): Registration;
    get supportedMimeTypes(): Set<string>;
    private supporterForMimeType;
    /**
     *
     * @returns multiple exports
     */
    exportFiles({ scope }: IExportFileOptions): Promise<Blob[] | null>;
}

                  