// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { Promisable } from 'type-fest';
import { Vector } from 'xyzt';
import { ISubLogger } from '../../../40-utils/logger/ILogger';
import { IArrayable } from '../../../40-utils/typeHelpers';
import { AbstractArt } from '../../../71-arts/20-AbstractArt';
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
     *      A) Return the arts to be created (and persisted)
     *      B) Return something which can be destroyed to cancel the importment
     *    2) Pass responsibility to another supporter via returning result of next calling
     *
     * Typically you will check mime type and choose what option to do.
     */
    processFile(options: {
        /**
         * File that should be imported
         * This file will always contain mimetype without the charset + filename
         */
        file: File;
        /**
         * Use this to log everything connected with this import
         */
        logger: ISubLogger;
        /**
         * Position to import the file
         * Tip: You can use utility centerArts to center arts on board on boardPosition
         */
        boardPosition: Vector;
        /**
         * This operation represents just preview of the file.
         * It can be updated by better preview of imported file.
         * Note: You do not need to destroy, persist or abort it, it will be done automatically
         */
        previewOperation: IOngoingOperation;
        /**
         * Signalizes that some new art(s) will be created.
         * This will do the following to enhance UX:
         * - Show virtual placeholder for new art(s)
         * - Show "Importing" message
         * - Change tool to select tool
         *
         */
        willCommitArts(): void;
        /**
         * Call and return next() to pass responsibility to another supporter
         */
        next(): typeof FILE_IMPORT_SUPPORTER_NEXT;
    }): Promisable<IArrayable<AbstractArt> | IDestroyable | typeof FILE_IMPORT_SUPPORTER_NEXT>;
}
export declare const FILE_IMPORT_SUPPORTER_NEXT: unique symbol;
