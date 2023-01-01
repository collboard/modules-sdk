// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { JsonValue } from 'type-fest';
import { ISerializable } from '../interfaces/ISerializable';
import { ISerializerRule } from '../interfaces/ISerializerRule';
import { SerializerError } from './SerializerError';
/**
 * @@x
 */
interface IDeserializationErrorDetails {
    /**
     * @@x
     */
    serialized: JsonValue;
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
export declare class DeserializationError extends SerializerError {
    readonly details: IDeserializationErrorDetails;
    readonly name = 'DeserializationError';
    constructor(message: string, details: IDeserializationErrorDetails);
}
export {};
/**
 * TODO: [🧠] Make ArtDeserializerError without recursionValues with errors
 * TODO: [🧠] In future make ErrorSystem to manage errors and logging of them
 * TODO: [🧠] Better name for handleDeserializationError, maybe logDeserializationError or reportDeserializationError
 * TODO: [🧠] What to use console vs consolex vs consoleBase
 * TODO: Split into whole folder DeserializationError
 * TODO: DRY Extract common of SerializationError+ISerializationErrorDetails and DeserializationError+IDeserializationErrorDetails into SerializerError
 */
