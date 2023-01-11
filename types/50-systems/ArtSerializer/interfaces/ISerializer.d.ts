// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { JsonValue, Promisable } from 'type-fest';
import { ISerializable } from './ISerializable';
import { ISerializerRule } from './ISerializerRule';
export interface ISerializer<TSerializable extends ISerializable> {
    /**
     * Add rule for serialization objects
     *
     * Each rule is recipe how to take instanced object and convert it to pure JSON and back.
     */
    registerRule(...rules: Array<ISerializerRule>): IDestroyable;
    /**
     * Take instanced object and convert it to pure JSON
     *
     * @param value to be serialized
     * @returns pure JSON object
     */
    serialize(value: TSerializable): Promisable<JsonValue>;
    /**
     * Take JSON made by serialize method and deserialize it
     *
     * @param serialized @@x
     * @returns @@x
     */
    deserialize(serialized: JsonValue): Promisable<TSerializable>;
}
/**
 * TODO: Maybe split into ISyncSerializer and IAsyncSerializer
 */
