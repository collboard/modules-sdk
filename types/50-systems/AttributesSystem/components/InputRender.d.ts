// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { BehaviorSubject } from 'rxjs';
import { attribute_value } from '../IAttribute';
import { IAttributeInputRender } from '../IAttributeInputRender';
interface IInputRenderProps {
    inputRender: IAttributeInputRender<attribute_value>;
    value: BehaviorSubject<attribute_value>;
    onChange: (value: attribute_value) => void;
}
export declare function InputRender(props: IInputRenderProps): JSX.Element;
export {};
