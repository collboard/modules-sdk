// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Registration } from 'destroyable';
import { ISerializable, ISerialized, ISerializeRule } from 'everstorage';
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
