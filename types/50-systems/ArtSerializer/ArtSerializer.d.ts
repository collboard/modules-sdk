// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Registration } from 'destroyable';
import { JsonValue } from 'type-fest';
import { Vector } from 'xyzt';
import { Commit } from '../../10-database/Commit';
import { ICommitData } from '../../10-database/interfaces/ICommitData';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { IArt } from '../CollSpace/IArt';
import { DeserializationError } from './errors/DeserializationError';
import { SerializationError } from './errors/SerializationError';
import { ISerializerRule } from './interfaces/ISerializerRule';
import { Serializer } from './Serializer';
/**
 * @@x
 */
declare type ICollboardSerializable = Commit | ICommitData | IArt | AbstractArt | Vector;
/**
 * ArtSerializer serializes and deseriales Collboard arts and other objects
 *
 * - **Serializer** is generic serializer which can work with any rules; it works synchronously
 * - **Serializer with basic rules** is Serializer which has registered basic rules; it works synchronously
 * - **ArtSerializer** serializes and deseriales Collboard arts and other objects; it works asynchronously
 *
 * @collboard-system
 */
export declare class ArtSerializer extends AbstractSystem {
    /**
     * @@x
     * Using composition over inheritance patern
     */
    readonly serializer: Serializer;
    protected init(): Promise<void>;
    /**
     * @@x copy from serializer
     */
    registerRule(...rules: Array<ISerializerRule>): Registration;
    /**
     * @@x copy from serializer
     */
    serialize(value: ICollboardSerializable): Promise<JsonValue>;
    /**
     * @@x copy from serializer
     */
    serializeWithRecursionProtection(
        value: ICollboardSerializable,
        errors: Array<SerializationError>,
    ): Promise<JsonValue>;
    /**
     * @@x copy from serializer
     */
    deserialize(serialized: JsonValue): Promise<ICollboardSerializable>;
    /**
     * @@x copy from serializer
     */
    deserializeWithRecursionProtection(
        serialized: JsonValue,
        errors: Array<DeserializationError>,
    ): Promise<ICollboardSerializable>;
}
export {};
/**
 * TODO: DRY serialize and deserialize
 * TODO: ArtSerializer should warn if you try to serialize unnessesary HUGE art - test on clone vs fixed freehand
 * TODO: In ICollboardSerializable maybe just Commit (not Commit | ICommitData )
 * TODO: Uninstall support modules with destroying of ArtSerializer
 * TODO: [🧠] In future here can be just ArtSerializer; Serializer with basic rules move into the independent library
 */
