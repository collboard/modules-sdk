// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { string_module_name, string_url, string_version_dependency } from '../../../40-utils/typeAliases';
/**
 * Record of modules which are dependencies. It contains dependency name + details
 * Note: IDependenciesRecord and IDependenciesSet carries same information but in different form
 *
 * @collboard-modules-sdk
 */
export declare type IDependenciesRecord = Record<string_module_name, IDependencyDetail>;
/**
 * Set of modules which are dependencies.
 * Note: !!! IDependenciesRecord and IDependenciesSet carries same information but in different form
 *
 * @collboard-modules-sdk
 */
export declare type IDependenciesSet = Set<IDependency>;
/**
 * Details about module dependency
 *
 * @collboard-modules-sdk
 */
export interface IDependency extends IDependencyDetail {
    name: string_module_name;
}
/**
 * Details about module dependency
 *
 * @collboard-modules-sdk
 */
export interface IDependencyDetail {
    repository?: string_url;
    version?: string_version_dependency;
    instances?:
        | number
        | {
              min?: number;
              max?: number;
          };
    priority?: number;
}
