// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { JsonValue } from 'type-fest';
import { string_module_name } from '../../../40-utils/typeAliases';
import { ISerializable } from '../interfaces/ISerializable';
/**
 * @@x
 */
export interface ISerializerRule {
    /**
     * @@x
     */
    name: string | string_module_name;
    /**
     * @@x
     */
    priority: number;
    /**
     * @@x
     *
     * @param options @@x
     */
    serialize(options: {
        value: ISerializable;
        next(): 'NEXT';
        serialize(subvalue: ISerializable): JsonValue;
    }): JsonValue | 'NEXT';
    /**
     * @@x
     *
     * @param options @@x
     */
    deserialize(options: {
        serialized: JsonValue;
        next(): 'NEXT';
        deserialize(subserialized: JsonValue): ISerializable;
    }): ISerializable | 'NEXT';
}
/**
 *  Something other than moduleSignature + when there use in errorMessageWithAdditional
 */
