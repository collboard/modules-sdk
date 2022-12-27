// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { JsonValue } from 'type-fest';
import { Vector } from 'xyzt';
import { ICommitData } from '../../10-database/interfaces/ICommitData';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { IArt } from '../CollSpace/IArt';
import { Commit } from './../../10-database/Commit';
import { AbstractArt } from './../../71-arts/20-AbstractArt';
import { ISerializeRule, Serializer } from './Serializer';
declare type ICollboardSerializable = Commit | ICommitData | IArt | AbstractArt | Vector;
/**
 * @collboard-system
 */
export declare class ArtSerializer extends AbstractSystem {
    readonly serializer: Serializer;
    protected init(): Promise<void>;
    registerRule(...rules: Array<ISerializeRule>): import('destroyable').Registration;
    serialize(value: ICollboardSerializable): Promise<JsonValue>;
    deserialize(serialized: JsonValue): Promise<ICollboardSerializable>;
}
export {};
/**
 * TODO: !!! What to do when error is catched but errorMessageWithAdditional will still report details about it
 * TODO: Uninstall support modules with destroying of ArtSerializer
 * TODO: !!! ACRY Go through all imports from everstorage
 */
