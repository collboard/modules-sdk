// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Registration } from 'destroyable';
import { ISerializable, ISerialized, ISerializeRule } from 'everstorage';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
/**
 * Serializer can serialize/deserialize objects. Primarily it is serialized arts.
 */
export declare class Serializer<T extends ISerializable> extends AbstractSystem {
    private rules;
    constructor(systems: ISystemsExtended, rules: Array<ISerializeRule<T>>);
    protected init(): Promise<void>;
    /**
     * Add rule for serialization objects
     *
     * Each rule is recipe how to take instanced object and convert it to pure JSON and back.
     */
    registerRule(rule: ISerializeRule<T>): Registration;
    /**
     * Take  instanced object and convert it to pure JSON.
     *
     * @param instance to be serialized
     * @returns pure JSON object with __class
     */
    serialize(instance: T, _maxRecursionLevel?: number, _topRecursionValue?: any): Promise<ISerialized>;
    private serializeWithPrimitives;
    /**
     * Take JSON made by serialize method and makes instanced object from it.
     *
     * @param serialized
     * @param _maxRecursionLevel
     * @param _topRecursionValue
     * @returns
     */
    deserialize(serialized: ISerialized, _maxRecursionLevel?: number, _topRecursionValue?: any): Promise<T>;
    private deserializeWithPrimitives;
    private getSerializeRuleFromInstance;
    private getSerializeRuleFromSerialized;
    /**
     * Deeply clones object by serializing and deserializing it.
     *
     * @param instance to be clonned
     * @returns new instance of the same class with same data
     */
    deepClone<TCloned extends T>(instance: TCloned): Promise<TCloned>;
}
/**
 * TODO: Serialize: Warn or error when object class is definitelly not generic Object but not defined in serializeRules
 * TODO: When deserializing make second param to check if object is really the requested type
 */
/**
 * TODO: This should be imported from LIB everstorage and extended
 * TODO: In future here only extended class and core of this  system in the independent library
 * TODO: This should be named AsyncSerializer and should use inside basic Serializer from utils
 * TODO: [🕎] Create/use some LIB for generic REST-api calls WITH SERIALIZER
 */
