// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { BehaviorSubject } from 'rxjs';
import { string_attribute, string_attribute_value_scope } from '../../40-utils/typeAliases';
import { AbstractSystem } from '../AbstractSystem';
import { attribute_value } from './IAttribute';
import { IAttributeRule } from './IAttributeRule';
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
            valueScope?: string_attribute_value_scope;
            overrideValue?: attribute_value;
            additionaOnChange?: (value: attribute_value) => void;
        },
    ): JSX.Element | null;
    private inputRenderDefined;
    private attributesValue;
    getAttributeValue(
        attributeName: string_attribute,
        valueScope?: string_attribute_value_scope,
    ): BehaviorSubject<attribute_value>;
    private getAttributeValueDefined;
    get registeredAttributeNames(): Array<string_attribute>;
}
/**
 * TODO: Check attribute name in correct format AS "timerControls"
 */
