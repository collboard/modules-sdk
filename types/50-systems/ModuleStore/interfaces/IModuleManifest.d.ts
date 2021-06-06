// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IFlags } from '../../../40-utils/flagsToObject';
import {
    string_char_emoji,
    string_email,
    string_module_category,
    string_module_name,
    string_person_fullname,
    string_url,
    string_url_image,
    string_version,
} from '../../../40-utils/typeAliases';
import { string_tranlate_language } from '../../TranslationsSystem/0-TranslationsSystem';
/**
 * Manifest describes the module.
 *
 * You are able to spread package.json into Collboard module manifest and all types are matching perfectly.
 * It is a bit inspired by all web and mobile app manifests.
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
    license?: IModuleManifestLicense;
    licenses?: IModuleManifestLicense[];
    author?: IModuleManifestAuthor;
    contributors?: IModuleManifestAuthor[];
    /**
     * This determinates the priority of module as a supporter
     */
    priority?: number;
    version?: string_version;
}
export interface IModuleFlags {
    hidden: boolean;
    deprecated: boolean;
    development: boolean;
    experimental: boolean;
}
/**
 * Describes author or contributor of a module. It is in same format as in package.json.
 */
export declare type IModuleManifestAuthor = string | IModuleManifestAuthorObject;
export declare type IModuleManifestAuthorObject = {
    name?: string_person_fullname;
    email?: string_email;
    url?: string_url;
};
export declare type IModuleManifestLicense =
    | string
    | {
          type?: string;
          url?: string;
      };
export declare type IModuleManifestTranslation =
    | string
    | (Record<string_tranlate_language, string> & {
          en?: string;
          cs?: string;
      });
