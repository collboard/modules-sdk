// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { DetailedError } from '../../../40-utils/errors/DetailedError';
import { IDeserializationErrorDetails } from './11-DeserializationError';
/**
 * @@x
 */
interface IArtDeserializationErrorDetails extends IDeserializationErrorDetails {
    /**
     * @@x
     */
    errors?: Array<Error>;
}
/**
 * @@x
 */
export declare class ArtDeserializationError extends DetailedError<IArtDeserializationErrorDetails> {
    readonly name = 'ArtDeserializationError';
    constructor(message: string, details: IArtDeserializationErrorDetails);
}
export { };
