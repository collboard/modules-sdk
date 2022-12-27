// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { JsonValue } from 'type-fest';
declare class SerializerError extends Error {
    readonly name: string;
    constructor(message: string);
}
export declare class SerializationError extends SerializerError {
    readonly name = 'SerializationError';
    constructor(message: string);
}
export declare class DeserializationError extends SerializerError {
    readonly name = 'DeserializationError';
    constructor(message: string);
}
export declare type ISerializable = any;
export interface ISerializeRule {
    priority: number;
    serialize(options: {
        value: ISerializable;
        next(): 'NEXT';
        serialize(value: ISerializable): JsonValue;
    }): JsonValue | 'NEXT';
    deserialize(options: {
        serialized: JsonValue;
        next(): 'NEXT';
        deserialize(serialized: JsonValue): ISerializable;
    }): ISerializable | 'NEXT';
}
/**
 * Serializer can serialize/deserialize objects into pure JSON objects
 */
export declare class Serializer {
    static createSerializerWithBasicRules(): Serializer;
    private rules;
    private get sortedRules();
    /**
     * Add rule for serialization objects
     *
     * Each rule is recipe how to take instanced object and convert it to pure JSON and back.
     */
    registerRule(...rules: Array<ISerializeRule>): import('destroyable').Registration;
    /**
     * Take  instanced object and convert it to pure JSON.
     *
     * @param instance to be serialized
     * @returns pure JSON object
     */
    serialize<T extends ISerializable>(value: T): JsonValue;
    /**
     * Take JSON made by serialize method and deserialize it
     *
     */
    deserialize(serialized: JsonValue): ISerializable;
}
export declare const pureObjectSerializerRule: ISerializeRule;
export declare const pureArraySerializerRule: ISerializeRule;
export declare const primitivesSerializerRule: ISerializeRule;
export declare const dateSerializerRule: ISerializeRule;
export declare const vectorSerializerRule: ISerializeRule;
export declare function createSerializerRuleForClass(classSerializeRule: IClassSerializeRule): ISerializeRule;
declare type IInstantiable = new (...args: any[]) => any;
export interface IClassSerializeRule {
    name: string;
    Class: IInstantiable;
}
export {};
/**
 * TODO: !!! createSerializerRuleForClass
 * TODO: !!! ACRY remove IInstantiable
 * TODO: !!! Handle circular structures
 * TODO: !!! ACRY SerializeRule vs SerializerRule
 * TODO: Serialize: Warn or error when object class is definitelly not generic Object but not defined in serializeRules
 * TODO: !!! Check in ALL usages of serializer.deserialize: When deserializing make second param to check if object is really the requested type
 * TODO: In future here only extended class and core of this  system in the independent library
 * TODO: !!! How to split serialize with installing: This should be named AsyncSerializer and should use inside basic Serializer from utils
 */
