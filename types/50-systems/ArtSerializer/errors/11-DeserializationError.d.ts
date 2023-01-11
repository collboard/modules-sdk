// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { JsonValue } from 'type-fest';
import { DetailedError } from '../../../40-utils/errors/DetailedError';
import { IBaseSerializerErrorDetails } from './00-IBaseSerializerErrorDetails';
/**
 * @@x
 */
export interface IDeserializationErrorDetails extends IBaseSerializerErrorDetails {
    /**
     * @@x
     */
    serialized: JsonValue;
}
/**
 * @@x
 */
export declare class DeserializationError extends DetailedError<IDeserializationErrorDetails> {
    readonly name = 'DeserializationError';
    constructor(message: string, details: IDeserializationErrorDetails);
}
