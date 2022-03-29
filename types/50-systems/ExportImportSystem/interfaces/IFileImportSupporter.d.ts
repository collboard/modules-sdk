// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { Promisable } from 'type-fest';
import { Vector } from 'xyzt';
import { ISubLogger } from '../../../40-utils/logger/ILogger';
import { IOngoingOperation } from '../../ArtVersionSystem/IOperation';
/**
 * This represents support for importing files
 * ImportSystem will call file supporter it will either import file into the board OR call next to pass responsibility to another supporter via calling next
 */
export interface IFileImportSupporter {
    /**
     * Higher priority means this importer will be called first
     */
    priority: number;
    /**
     *  processFile it will do one of the following:
     *    1) Import file into the board and:
     *      - Return the operation that was created
     *      - Return something which can be destroyed to cancel the importment
     *    2) Pass responsibility to another supporter via returning result of next calling
     *
     * Typically you will check mime type and choose what option to do.
     */
    processFile: (options: {
        logger: ISubLogger;
        boardPosition: Vector;
        file: File;
        next(): typeof FILE_IMPORT_SUPPORTER_NEXT;
    }) => Promisable<IDestroyable | IOngoingOperation | typeof FILE_IMPORT_SUPPORTER_NEXT>;
}
export declare const FILE_IMPORT_SUPPORTER_NEXT: unique symbol;
