// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { string_module_name } from '../../40-utils/typeAliases';
import { IAttribute } from './IAttribute';
import { IAttributeInputRender } from './IAttributeInputRender';
export interface IAttributeRule<T> {
    moduleName: string_module_name;
    attribute: IAttribute;
    /**
     * TODO: Maybe get rid of standard/bonus and bring up priority
     */
    standard: boolean;
    inputRender: IAttributeInputRender<T>;
}
