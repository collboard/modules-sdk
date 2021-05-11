// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
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
