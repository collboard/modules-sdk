// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Registration } from 'destroyable';
import { JsonValue } from 'type-fest';
import { ISerializable } from './interfaces/ISerializable';
import { ISerializerRule } from './interfaces/ISerializerRule';
/**
 * Serializer can serialize/deserialize objects into pure JSON objects
 *
 * - **Serializer** is generic serializer which can work with any rules; it works synchronously
 * - **Serializer with basic rules** is Serializer which has registered basic rules; it works synchronously
 * - **ArtSerializer** serializes and deseriales Collboard arts and other objects; it works asynchronously
 */
export declare class Serializer {
    /**
     * @@x
     * @returns Serializer @@x
     */
    static createSerializerWithBasicRules(): Serializer;
    /**
     * @@x
     */
    private rules;
    /**
     * @@x
     */
    private get sortedRules();
    /**
     * Add rule for serialization objects
     *
     * Each rule is recipe how to take instanced object and convert it to pure JSON and back.
     */
    registerRule(...rules: Array<ISerializerRule>): Registration;
    /**
     * Take instanced object and convert it to pure JSON
     *
     * @param value to be serialized
     * @returns pure JSON object
     */
    serialize<TSerializable extends ISerializable>(value: TSerializable): JsonValue;
    /**
     * Take instanced object and convert it to pure JSON
     * With recursion protection
     *
     * @param value to be serialized
     * @param recursionValues stack all the recursion values
     * @returns
     */
    serializeWithRecursionProtection<TSerializable extends ISerializable>(
        value: TSerializable,
        recursionValues: Array<ISerializable>,
    ): JsonValue;
    /**
     * Take JSON made by serialize method and deserialize it
     *
     * @param serialized @@x
     * @returns @@x
     */
    deserialize(serialized: JsonValue): ISerializable;
    /**
     * Take JSON made by serialize method and deserialize it
     * With recursion protection
     *
     * @param serialized to be serialized
     * @param recursionValues stack all the recursion values
     * @returns
     */
    deserializeWithRecursionProtection(serialized: JsonValue, recursionValues: Array<ISerializable>): ISerializable;
}
