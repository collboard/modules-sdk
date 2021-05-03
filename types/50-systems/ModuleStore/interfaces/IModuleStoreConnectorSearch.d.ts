
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IJson } from 'everstorage';
import { string_attribute, string_module_category } from '../../../40-utils/typeAliases';
import { IDependency } from './IDependencies';
import { IModuleManifest } from './IModuleManifest';
export interface IModuleStoreConnectorSearchQuery extends IJson {
    needle?: string;
    category?: string_module_category;
    supports?: {
        art?: string | any;
        attribute?: string_attribute;
    };
}
export declare const DEFAULT_IModuleStoreConnectorSearchQuery: IModuleStoreConnectorSearchQuery;
export interface IModuleStoreConnectorSearchResult {
    modules: Array<IDependency & Partial<IModuleManifest>>;
}

                  