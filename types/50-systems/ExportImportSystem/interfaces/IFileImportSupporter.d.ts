
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { Vector } from 'xyzt';
import { string_mime_type_with_wildcard } from '../../../40-utils/typeAliases';
/**
 * This represents support for one file type for example some mime type or text file with some structure
 * ImportSystem will call file supporter it will either import file into the board OR call next to pass responsibility to another supporter
 */
export interface IFileImportSupporter {
    /**
     * Higher priority means this importer will be called first
     */
    priority: number;
    /**
     * importFile will be only called when mime type is matching
     * This is also indicator for auto-instllation mechanism
     */
    mimeType?: string_mime_type_with_wildcard;
    /**
     *  processFile it will either import file into the board OR call next to pass responsibility to another supporter
     */
    processFile: (options: {
        boardPosition: Vector;
        file: Blob;
        next: () => void;
    }) => Promise<void>;
}

                  