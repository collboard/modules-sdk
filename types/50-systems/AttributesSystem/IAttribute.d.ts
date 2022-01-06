// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
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
