
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IFlags } from '../../../40-utils/flagsToObject';
import { string_char_emoji, string_email, string_license, string_module_category, string_module_name, string_person_fullname, string_url, string_url_image, string_version } from '../../../40-utils/typeAliases';
import { string_tranlate_language } from '../../TranslationsSystem/0-TranslationsSystem';
import { IDependenciesRecord } from './IDependencies';
/**
 * Manifest describes the module.
 * It is a bit inspired by all web and mobile app manifests + dependencies and project manifests like package.json or tsconfig.json
 *
 */
export interface IModuleManifest {
    name: string_module_name;
    title?: IModuleManifestTranslation;
    description?: IModuleManifestTranslation;
    keywords?: string[];
    flags?: IFlags<IModuleFlags>;
    categories?: string_module_category[];
    icon?: string_url_image | string_char_emoji;
    screenshots?: string_url_image[];
    license?: string_license;
    author?: IModuleManifestAuthor;
    contributors?: IModuleManifestAuthor[];
    /**
     * This determinates the priority of module as a supporter
     * TODO: Use in MimeSupportSystem
     * TODO: Use in support systems
     */
    priority?: number;
    hidden?: true;
    dependencies?: IDependenciesRecord;
    version?: string_version;
    inDevelopment?: true;
    inDevelopmentPublishedAsExperimental?: true;
    deprecated?: true;
}
export interface IModuleFlags {
    deprecated: boolean;
}
/**
 * Describes author or contributor of a module. It is in same format as in package.json.
 */
export interface IModuleManifestAuthor {
    name: string_person_fullname;
    email?: string_email;
    url?: string_url;
}
export declare const internalModule: true;
export declare const hidden: true;
export declare const inDevelopment: true;
export declare const inDevelopmentPublishedAsExperimental: true;
export declare const deprecated: true;
export declare type IModuleManifestTranslation = string | (Record<string_tranlate_language, string> & {
    en?: string;
    cs?: string;
});

                  