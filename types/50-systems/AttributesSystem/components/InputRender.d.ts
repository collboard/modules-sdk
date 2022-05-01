// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { RequireOnlyOne } from '../../../40-utils/typeHelpers';
import { IWrappedValue } from '../0-AttributesSystem';
import { attribute_value } from '../IAttribute';
import { IAttributeInputRender } from '../IAttributeInputRender';
declare type IInputRenderProps = RequireOnlyOne<
    {
        inputRender: IAttributeInputRender<attribute_value>;
        defaultValue?: attribute_value;
        wrappedValue?: IWrappedValue;
        onChange: (value: attribute_value) => void;
    },
    'defaultValue' | 'wrappedValue'
>;
export declare class InputRender extends React.Component<IInputRenderProps> {
    render(): JSX.Element;
}
export {};
