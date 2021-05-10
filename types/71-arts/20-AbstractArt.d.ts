
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { string_attribute, string_uuid } from '../40-utils/typeAliases';
import { attribute_value } from '../50-systems/AttributesSystem/IAttribute';
/**
 * TODO: description
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 *
 * @collboard-modules-sdk
 */
export declare abstract class AbstractArt {
    [index: string]: attribute_value | any;
    abstract get acceptedAttributes(): string_attribute[];
    readonly artId: string_uuid;
    constructor();
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */

                  