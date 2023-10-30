// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { BehaviorSubject } from 'rxjs';
import { string_attribute, string_attribute_value_scope } from '../../../40-utils/typeAliases';
import { AttributesSystem } from '../0-AttributesSystem';
import { attribute_value } from '../IAttribute';
import { IAttributeRule } from '../IAttributeRule';
interface IInputsRenderProps {
    attributesManager: AttributesSystem;
    attributesRules: BehaviorSubject<Array<IAttributeRule<attribute_value>>>;
    attributeName: string_attribute;
    overrideValue?: attribute_value;
    valueScope?: string_attribute_value_scope;
    additionaOnChange?: (value: attribute_value) => void;
}
export declare function InputsRender(props: IInputsRenderProps): JSX.Element;
export {};
