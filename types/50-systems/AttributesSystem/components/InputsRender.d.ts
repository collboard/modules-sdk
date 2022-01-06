// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import * as React from 'react';
import { string_attribute, string_context } from '../../../40-utils/typeAliases';
import { AttributesSystem } from '../0-AttributesSystem';
import { attribute_value } from '../IAttribute';
import { IAttributeRule } from '../IAttributeRule';
interface IInputsRenderProps {
    attributesManager: AttributesSystem;
    attributesRules: Array<IAttributeRule<attribute_value>>;
    attributeName: string_attribute;
    defaultValue?: attribute_value;
    context?: string_context;
    additionaOnChange?: (value: attribute_value) => void;
}
export declare class InputsRender extends React.Component<IInputsRenderProps> {
    render(): JSX.Element;
}
export {};
