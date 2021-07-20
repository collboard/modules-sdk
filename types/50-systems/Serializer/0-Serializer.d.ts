// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { ISerializable, ISerialized, ISerializeRule } from 'everstorage';
import { Registration } from '../../40-utils/destroyables/Registration';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../AbstractSystem';
/**
 * TODO: !! This should be imported from everstorage and extended
 * Serializer can serialize/deserialize objects. Primarily it is serialized arts.
 * TODO: In future here only extended class and core of this  system in the independent library
 * TODO: This should be named AsyncSerializer and should use inside basic Serializer from utils
 */
export declare class Serializer<T extends ISerializable> extends AbstractSystem {
    private rules;
    constructor(systems: ISystemsExtended, rules: Array<ISerializeRule<T>>);
    protected init(): Promise<void>;
    registerRule(rule: ISerializeRule<T>): Registration;
    serialize(instance: T): Promise<ISerialized>;
    deserialize(serialized: ISerialized): Promise<T>;
    private serializeWithPrimitives;
    private deserializeWithPrimitives;
    private getSerializeRuleFromInstance;
    private getSerializeRuleFromSerialized;
    deepClone<TCloned extends T>(instance: TCloned): Promise<TCloned>;
}
