
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

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

                  