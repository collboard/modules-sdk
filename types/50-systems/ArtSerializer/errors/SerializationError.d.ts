// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISerializable } from '../interfaces/ISerializable';
import { ISerializerRule } from '../interfaces/ISerializerRule';
import { SerializerError } from './SerializerError';
/**
 * @@x
 */
interface ISerializationErrorDetails {
    /**
     * @@x
     */
    value: ISerializable;
    /**
     * @@x
     */
    rules?: Array<ISerializerRule>;
    /**
     * @@x
     */
    recursionValues?: Array<ISerializable>;
    /**
     * @@x
     */
    errors?: Array<Error>;
}
/**
 * @@x
 */
export declare class SerializationError extends SerializerError {
    readonly details: ISerializationErrorDetails;
    readonly name = 'SerializationError';
    constructor(message: string, details: ISerializationErrorDetails);
}
export {};
/**
 * TODO: [🧠] Make ArtSerializerError without recursionValues with errors
 * TODO: [🧠] Better name for handleSerializationError, maybe logSerializationError or reportSerializationError
 * TODO: [🧠] What to use console vs consolex vs consoleBase
 * TODO: Split into whole folder SerializationError
 * TODO: DRY Extract common of SerializationError+ISerializationErrorDetails and DeserializationError+IDeserializationErrorDetails into SerializerError
 */
