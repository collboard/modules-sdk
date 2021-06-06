// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IAwaitable } from '../../../40-utils/IAwaitable';
import { string_module_name } from '../../../40-utils/typeAliases';
/**
 * Activator saves the information which module should be synced/installed
 *
 * Note: this is not using destroyable pattern because activation of the module is long-term thing
 */
export interface IActivator {
    moduleActivate(moduleName: string_module_name): IAwaitable<void>;
    moduleDeactivate(moduleName: string_module_name): IAwaitable<void>;
}
