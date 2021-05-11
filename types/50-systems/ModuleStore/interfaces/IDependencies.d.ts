// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { string_module_name, string_url, string_version_dependency } from '../../../40-utils/typeAliases';
export declare type IDependenciesRecord = Record<string_module_name, IDependencyDetail>;
export declare type IDependenciesSet = Set<IDependency>;
export interface IDependency extends IDependencyDetail {
    name: string_module_name;
}
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
