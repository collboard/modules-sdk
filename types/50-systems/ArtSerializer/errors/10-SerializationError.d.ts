// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { DetailedError } from '../../../40-utils/errors/DetailedError';
import { ISerializable } from '../interfaces/ISerializable';
import { IBaseSerializerErrorDetails } from './00-IBaseSerializerErrorDetails';
/**
 * @@x
 */
export interface ISerializationErrorDetails extends IBaseSerializerErrorDetails {
    /**
     * @@x
     */
    value: ISerializable;
}
/**
 * @@x
 */
export declare class SerializationError extends DetailedError<ISerializationErrorDetails> {
    readonly name = 'SerializationError';
    constructor(message: string, details: ISerializationErrorDetails);
}
