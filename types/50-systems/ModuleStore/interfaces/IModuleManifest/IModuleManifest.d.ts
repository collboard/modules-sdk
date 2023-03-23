// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_char_emoji } from '../../../../40-utils/typeAliasEmoji';
import {
  IRepository,
  string_attribute,
  string_mime_type_with_wildcard,
  string_module_category,
  string_module_name,
  string_url,
  string_url_image,
  string_version
} from '../../../../40-utils/typeAliases';
import { Arrayable, ArrayFull } from '../../../../40-utils/typeHelpers';
import { IStringMessage } from '../../../TranslationsSystem/interfaces/IMessage';
import { IModuleFlags } from './IModuleFlags';
import { IModuleManifestAuthor } from './IModuleManifestAuthor';
import { IModuleManifestSoftwareLicense } from './IModuleManifestSoftwareLicense';
import { IModuleManifestUsageLicense } from './IModuleManifestUsageLicense';
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
    deprecatedNames?: Arrayable<string_module_name>;
    title?: IStringMessage;
    description?: IStringMessage;
    keywords?: Array<string>;
    flags?: Partial<IModuleFlags>;
    categories?: Array<string_module_category>;
    /**
     * Icon of the module
     * - It can be a URL to image in format for web (like png, svg, webp,...)
     * - It can be UTF-8 emoji like 🐇
     *
     * Do not recommend to put here urlencoded dataurl.
     */
    icon?: string_url_image | string_char_emoji;
    /**
     * URL of screenshots in format for web (like png, svg, webp,...)
     */
    screenshots?: Array<string_url_image>;
    /**
     * Describes software license of a module.
     * It is in same format as in package.json.
     * Note: In manifest there can be either license or licenses.
     *
     * @deprecated use instead softwareLicense (because it is more descriptive and distinct from software from usage license)
     */
    license?: IModuleManifestSoftwareLicense;
    /**
     * Describes software license of a module.
     * It is in same format as in package.json.
     * Note: In manifest there can be either license or licenses.
     *
     * @deprecated use instead softwareLicense (because it is more descriptive and distinct from software from usage license)
     */
    licenses?: Array<IModuleManifestSoftwareLicense>;
    /**
     * Describes software license of a module.
     * It is in same format as in package.json.
     * Note: In manifest there can be either license or licenses.
     */
    softwareLicense?: IModuleManifestSoftwareLicense;
    /**
     * Describes licence for usage of a module.
     * It not specified it will be considered as free
     */
    usageLicenses?: ArrayFull<IModuleManifestUsageLicense>;
    /**
     * Describes author or contributor of a module.
     * It is in same format as in package.json.
     * Note: In manifest there can be either author or contributors.
     */
    author?: IModuleManifestAuthor;
    /**
     * Describes author or contributor of a module.
     * It is in same format as in package.json.
     * Note: In manifest there can be either author or contributors.
     */
    contributors?: Array<IModuleManifestAuthor>;
    /**
     * Url to the module repository.
     */
    repository?: string_url | IRepository;
    /**
     * Url to other information about the module.
     * This is completely optional, if not filled it will be used as a link to the module store on Collboard.
     */
    homepage?: string_url;
    /**
     * This determinates the priority of module as a supporter
     */
    priority?: number;
    version?: string_version;
    /**
     * manifest.supports defines if the module have a specific function in several situations.
     */
    supports?: {
        /**
         * Module can deserialize given art(s)
         */
        art?: Arrayable<string>;
        /**
         * Module can work with given attribute(s)
         */
        attribute?: Arrayable<string_attribute>;
        /**
         * Module can import given file(s) with given mime type(s)
         * Note: You are allowed to use wildcard in mime type; for example 'image/*'
         * Note: There is no fileExport in manifest.supports because for logic of importing is different than exporting.
         *       Importing - I have some file with known mimetype and I want to find best fitting module to process it.
         *       Exporting - I have an art and I want to export it to all wanted formats. There are some well-known formats like text, html or image wich will be installed by default and other format exports can be installed manually or by business.
         */
        fileImport?: Arrayable<string_mime_type_with_wildcard>;
    };
    /**
     * Minimal required permissions for module to be working
     *
     * Note: 'edit' extends 'view' so ['edit'] is same as ['view', 'edit']
     * Note: In future here will be complex logic of permissions
     * Note: Because the default value is ['edit'] you can activelly lower it by putting ['view'] in manifest
     *
     * @default ['edit']
     */
    requirePermissions?: Array<'view' | 'edit' | string>;
}
/**
 * TODO: [✨] What is the best way to mark the permissions and flags
 * TODO: PickOneOf in manifest:
 *        - license or licenses
 *        - author or contributors
 */
