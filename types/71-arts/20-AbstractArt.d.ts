// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_uuid } from '../40-utils/typeAliases';
import { attribute_value } from '../50-systems/AttributesSystem/IAttribute';
/**
 * AbstractArt is an abstract class which all art classes extend.
 *
 * It only provides unique identifier for each art
 *
 * @collboard-modules-sdk
 */
export declare abstract class AbstractArt {
    /**
     * AbstractArt is considered indexable in order to make serialization
     * and deserialization work
     *
     * TODO: [🍎] Remove when there is only shape and appearance on the arts
     */
    [index: string]: attribute_value | any;
    /**
     * Unique identifier of each art
     */
    readonly artId: string_uuid;
    constructor();
}
/**
 * TODO: [🎚️] Maybe get rit of AbstractArts and make makers for arts which returns IArts
 */
