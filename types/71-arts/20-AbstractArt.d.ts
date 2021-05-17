// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

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
     */
    [index: string]: attribute_value | any;
    /**
     * Unique identifier of each art
     */
    readonly artId: string_uuid;
    constructor();
}
