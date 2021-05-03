
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { string_attribute } from '../../40-utils/typeAliases';
export declare type IAttribute = IAttributeString | IAttributeNumber | IAttributeBoolean | IAttributeObject;
export declare type attribute_value = number | string | boolean | object;
interface IAttributeCommon {
    name: string_attribute;
}
export interface IAttributeString extends IAttributeCommon {
    type: 'string';
    defaultValue?: string;
    pattern?: RegExp;
}
export interface IAttributeNumber extends IAttributeCommon {
    type: 'number';
    defaultValue: number;
    min?: number;
    max?: number;
}
export interface IAttributeBoolean extends IAttributeCommon {
    type: 'boolean';
    defaultValue: boolean;
}
export interface IAttributeObject extends IAttributeCommon {
    type: 'object';
    defaultValue: any;
}
export {};

                  