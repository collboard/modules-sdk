// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IRepository, string_module_name, string_url, string_version_dependency } from '../../../40-utils/typeAliases';
/**
 * Record of modules which are dependencies. It contains dependency name + details
 * Note: IDependenciesRecord and IDependenciesSet carries same information but in different form
 *
 * @collboard-modules-sdk
 */
export declare type IDependenciesRecord = Record<string_module_name, IDependencyDetail>;
/**
 * Set of modules which are dependencies.
 * Note: !! IDependenciesRecord and IDependenciesSet carries same information but in different form
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
 *
 * TODO: Make value true as shortcut for { priority: 0 }
 */
export interface IDependencyDetail {
    repository?: string_url | IRepository;
    version?: string_version_dependency;
    instances?:
        | number
        | {
              min?: number;
              max?: number;
          };
    priority?: number;
}
