// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IArrayable } from '../../../40-utils/toArray';
import {
    ILicense,
    IPersonProfile,
    IRepository,
    string_attribute,
    string_char_emoji,
    string_license,
    string_module_category,
    string_module_name,
    string_person_profile,
    string_translate_language,
    string_url,
    string_url_image,
    string_version,
} from '../../../40-utils/typeAliases';
/**
 * Manifest describes the module.
 *
 * You are able to spread package.json into Collboard module manifest and all types are matching perfectly.
 * It is a bit inspired by all web and mobile app manifests.
 *
 * @collboard-modules-sdk
 */
export interface IModuleManifest {
    name: string_module_name;
    deprecatedNames?: IArrayable<string_module_name>;
    title?: IModuleManifestTranslation;
    description?: IModuleManifestTranslation;
    keywords?: string[];
    flags?: Partial<IModuleFlags>;
    categories?: string_module_category[];
    icon?: string_url_image | string_char_emoji;
    screenshots?: string_url_image[];
    license?: IModuleManifestLicense;
    licenses?: IModuleManifestLicense[];
    author?: IModuleManifestAuthor;
    contributors?: IModuleManifestAuthor[];
    repository?: string_url | IRepository;
    homepage?: string_url;
    /**
     * This determinates the priority of module as a supporter
     */
    priority?: number;
    version?: string_version;
    supports?: {
        art?: IArrayable<string>;
        attribute?: IArrayable<string_attribute>;
    };
}
/**
 *
 *
 * @collboard-modules-sdk
 */
export interface IModuleFlags {
    isPrivate: boolean;
    isHidden: boolean;
    isDeprecated: boolean;
    isDevelopment: boolean;
    isExperimental: boolean;
    isTemplate: boolean;
}
/**
 * Describes author or contributor of a module. It is in same format as in package.json.
 *
 * @collboard-modules-sdk
 */
export declare type IModuleManifestAuthor = string_person_profile | IPersonProfile;
/**
 *
 *
 * @collboard-modules-sdk
 */
export declare type IModuleManifestLicense = string_license | ILicense;
/**
 *
 *
 * @collboard-modules-sdk
 */
export declare type IModuleManifestTranslation = string | Partial<Record<string_translate_language, string>>;
