// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { string_attribute, string_context } from '../../40-utils/typeAliases';
import { AbstractSystem } from '../AbstractSystem';
import { attribute_value } from './IAttribute';
import { IAttributeRule } from './IAttributeRule';
export interface IWrappedValue {
    value: attribute_value;
}
/**
 * AttributesSystem manages shared art attributes and modules capable of selecting from them. It auto-installs / uninstalls attribute modules.
 *
 * @collboard-system
 */
export declare class AttributesSystem extends AbstractSystem {
    private attributesRules;
    protected init(): Promise<void>;
    registerAttributeRule(rule: IAttributeRule<attribute_value>): import('destroyable').Registration;
    /**
     *
     * Note: this is not async because when it need to do some async stuff it will return AsyncContentComponent immediatelly and load in in the fly
     * TODO: Is it a good solution?
     */
    inputRender(
        attributeName: string_attribute,
        options?: {
            context?: string_context;
            defaultValue?: attribute_value;
            additionaOnChange?: (value: attribute_value) => void;
        },
    ): JSX.Element | null;
    private inputRenderDefined;
    private attributesValueWrapped;
    /**
     *
     * Note: this is not async because when it need to do some async stuff it will return observable immediatelly and change in in the fly
     * TODO: Is it a good solution?
     */
    _getAttributeValueWrapped(attributeName: string_attribute, context?: string_context): IWrappedValue;
    private getAttributeValueWrappedDefined;
    getAttributeValue(attributeName: string_attribute, context?: string_context): attribute_value;
    setAttributeValue(attributeName: string_attribute, context: string_context, value: attribute_value): void;
    get registeredAttributeNames(): string_attribute[];
}
