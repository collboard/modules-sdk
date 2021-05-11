// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IVector } from 'xyzt';
export interface IImportFileOptions {
    /**
     * TODO: Use here xyzt coords to allow consumer to use different coord system and reference for example screenCenteredPosition
     */
    boardPosition?: IVector | null;
    /**
     * When you provide multiple files it will import ONLY one
     * Firstly it will look at the first file and try to import it
     * If there is no support for it it will go and try second file...
     * This mechanism is primarlly usefull for pasting from clipboard.
     */
    file: Blob | Blob[];
}
