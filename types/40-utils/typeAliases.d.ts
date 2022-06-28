// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Semantic helper
 *
 * For example `"text/plain"` or `"application/collboard"`
 * @collboard-modules-sdk
 */
export declare type string_mime_type = string;
/**
 * Semantic helper
 *
 * For example `"text/*"` or `"image/*"`
 * @collboard-modules-sdk
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
 */
export declare type string_mime_type_with_wildcard = string;
/**
 * Semantic helper
 *
 * For example `"a"`
 * @collboard-modules-sdk
 */
export declare type string_char = string;
/**
 * Semantic helper
 *
 * For example `"<div>Hello World!</div>"`
 * @collboard-modules-sdk
 */
export declare type string_html = string;
/**
 * Semantic helper
 *
 * For example `"<foo>bar</foo>"`
 * @collboard-modules-sdk
 *
 * TODO: [🎞️] Probbably use some object-based method for working with XMLs
 */
export declare type string_xml = string;
/**
 * Semantic helper
 *
 * For example `.foo{border: 1px solid red}`
 * @collboard-modules-sdk
 */
export declare type string_css = string;
/**
 * Semantic helper
 *
 * For example `border`
 * @collboard-modules-sdk
 */
export declare type string_css_property = string;
/**
 * Semantic helper
 *
 * For example `13px`
 * @collboard-modules-sdk
 */
export declare type string_css_value = string;
/**
 * Semantic helper
 *
 * For example `.foo`
 * @collboard-modules-sdk
 */
export declare type string_css_selector = string;
/**
 * Semantic helper
 *
 * For example `"https://collboard.com/9SeSQTupmQHwuSrLi"`
 * @collboard-modules-sdk
 */
export declare type string_url = string;
/**
 * Semantic helper
 *
 * For example `"data:text/plain;base64,SGVsbG8sIFdvcmxkIQ=="`
 * @collboard-modules-sdk
 */
export declare type string_data_url = string;
/**
 * Semantic helper
 *
 * For example `"https://collboard.com/9SeSQTupmQHwuSrLi"` OR `/9SeSQTupmQHwuSrLi`
 * @collboard-modules-sdk
 */
export declare type string_href = string;
/**
 * Semantic helper
 *
 * For example `"https://collboard.com/9SeSQTupmQHwuSrLi.png?width=1200&height=630"`
 * @collboard-modules-sdk
 */
export declare type string_url_image = string;
/**
 * Semantic helper
 *
 * For example `"/9SeSQTupmQHwuSrLi"`
 * @collboard-modules-sdk
 */
export declare type string_uri = string;
/**
 * Semantic helper
 *
 * For example `"9SeSQTupmQHwuSrLi"`
 * @collboard-modules-sdk
 */
export declare type string_uri_part = string;
/**
 * Semantic helper, ID of the board used in URL and API
 *
 * For example `"9SeSQTupmQHwuSrLi"`
 * @collboard-modules-sdk
 */
export declare type string_uriid = string_uri_part;
/**
 * Semantic helper
 *
 * @collboard-modules-sdk
 */
export declare type string_protocol = 'http:' | 'https:';
/**
 * Semantic helper
 *
 * For example `"localhost"` or `"collboard.com"`
 * @collboard-modules-sdk
 */
export declare type string_hostname = string;
/**
 * Semantic helper
 *
 * For example `"localhost:9977"` or `"collboard.com"`
 * @collboard-modules-sdk
 */
export declare type string_host = string;
/**
 * Semantic helper
 *
 * For example `"pavol@collboard.com"`
 * @collboard-modules-sdk
 */
export declare type string_email = string;
/**
 * Semantic helper
 *
 * For example `"5a0a153d-7be9-4018-9eda-e0e2e2b89bd9"`
 * @collboard-modules-sdk
 */
export declare type string_uuid = string;
/**
 * Semantic helper
 * UUID with only the first part of the UUID
 *
 * For example `"5a0a153d"`
 * @collboard-modules-sdk
 */
export declare type string_uuid_cut = string;
/**
 * Semantic helper
 *
 * For example `"b126926439c5fcb83609888a11283723c1ef137c0ad599a77a1be81812bd221d"`
 * @collboard-modules-sdk
 */
export declare type string_sha256 = string;
/**
 * Semantic helper
 *
 * For example `"4.2.4"`
 * @collboard-modules-sdk
 */
export declare type string_version = string;
/**
 * Semantic helper
 *
 * For example `"^4.2.4"`
 * @collboard-modules-sdk
 */
export declare type string_version_dependency = string;
/**
 * Semantic helper
 *
 * For example `"png"`
 * @collboard-modules-sdk
 */
export declare type string_file_extension = string;
/**
 * Semantic helper
 *
 * For example `"C:/Users/me/work/collboard/modules-sdk/src/colldev/commands/develop/ColldevDevelop.tsx"`
 * @collboard-modules-sdk
 */
export declare type string_file_absolute_path = string;
/**
 * Semantic helper
 *
 * For example `"./src/colldev/commands/develop/ColldevDevelop.tsx"`
 * @collboard-modules-sdk
 */
export declare type string_file_relative_path = string;
/**
 * Semantic helper
 *
 * @collboard-modules-sdk
 */
export declare type string_file_path = string_file_absolute_path | string_file_relative_path;
/**
 * Semantic helper
 *
 * For example `"C:/Users/me/work/collboard/modules-sdk/src/colldev/commands/develop/ColldevDevelop.tsx"`
 * @collboard-modules-sdk
 */
export declare type string_folder_absolute_path = string;
/**
 * Semantic helper
 *
 * For example `"./src/colldev/commands/develop/ColldevDevelop.tsx"`
 * @collboard-modules-sdk
 */
export declare type string_folder_relative_path = string;
/**
 * Semantic helper
 *
 * @collboard-modules-sdk
 */
export declare type string_folder_path = string_file_absolute_path | string_file_relative_path;
/**
 * Semantic helper
 *
 * - basically module identifier
 *
 * For example `"@collboard/download"`
 * @pattern /^(@(?<scope>[a-z0-9][a-z0-9-]*))\/(?<name>([a-z0-9][a-z0-9-]*)(\/([a-z0-9][a-z0-9-]*))*)$/
 * @collboard-modules-sdk
 */
export declare type string_module_name = string;
/**
 * Semantic helper
 *
 * - case insensitive
 *
 * For example `"Basic"` or `"Math"`
 *
 * *Note: This may become an enum of values in the near future*
 * @collboard-modules-sdk
 */
export declare type string_module_category = string;
/**
 * Semantic helper
 *
 * For example `"John Smith"`
 * @collboard-modules-sdk
 */
export declare type string_person_fullname = string;
/**
 * Semantic helper
 * Full profile of the person with his email and web (like in package.json)
 *
 * For example `"Pavol Hejný <pavol@collboard.com> (https://pavolhejny.com)"`
 * @collboard-modules-sdk
 */
export declare type string_person_profile = string;
/**
 * Full profile of the person with his email and web (like in package.json)
 *
 * @collboard-modules-sdk
 */
export interface IPersonProfile {
    name?: string_person_fullname;
    /**
     * Note: Photos are taken from Gravatar by email
     */
    email?: string_email;
    url?: string_url;
}
/**
 * Semantic helper
 *
 * For example `"MIT"`
 * @collboard-modules-sdk
 */
export declare type string_license = string;
/**
 * License with its type and url like in package.json
 *
 * @collboard-modules-sdk
 */
export interface ILicense {
    type?: string_license;
    url?: string;
}
/**
 * Repository with its type and url like in package.json
 *
 * @collboard-modules-sdk
 */
export interface IRepository {
    type?: string | 'git';
    url?: string;
}
/**
 * Semantic helper
 *
 * Keyword is string without diacritics in lowercase [a-z1-9]
 * Words are splitted between multiple keywords @see IKeywords
 *
 * For example `"keyword"`
 * @collboard-modules-sdk
 */
export declare type string_keyword = string;
/**
 * Semantic helper
 * Array of keywords @see string_keyword
 *
 * @collboard-modules-sdk
 */
export declare type Keywords = string_keyword[];
/**
 * CSS cursor type
 * @collboard-modules-sdk
 */
export declare type string_css_cursor =
    | 'alias'
    | 'all-scroll'
    | 'auto'
    | 'cell'
    | 'context-menu'
    | 'col-resize'
    | 'copy'
    | 'crosshair'
    | 'default'
    | 'e-resize'
    | 'ew-resize'
    | 'grab'
    | 'grabbing'
    | 'help'
    | 'move'
    | 'n-resize'
    | 'ne-resize'
    | 'nesw-resize'
    | 'ns-resize'
    | 'nw-resize'
    | 'nwse-resize'
    | 'no-drop'
    | 'none'
    | 'not-allowed'
    | 'pointer'
    | 'progress'
    | 'row-resize'
    | 's-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'text'
    | 'w-resize'
    | 'wait'
    | 'zoom-in'
    | 'zoom-out';
/**
 * Semantic helper for attributes
 *
 * - case insensitive
 *
 * For example `"color"`
 * @collboard-modules-sdk
 */
export declare type string_attribute = string;
/**
 * Semantic helper for attributes context
 *
 * - case insensitive
 *
 * For example `"tools"`
 * @collboard-modules-sdk
 */
export declare type string_context = string;
/**
 * Semantic helper for css/html colors
 *
 * For example `"white"` or `"#906090"`
 * @collboard-modules-sdk
 */
export declare type string_color = string;
export declare type number_miliseconds = number;
export declare type number_seconds = number;
export declare type number_minutes = number;
export declare type number_hours = number;
export declare type number_days = number;
export declare type number_weeks = number;
export declare type number_months = number;
export declare type number_years = number;
export declare type number_bytes = number;
export declare type number_kilobytes = number;
export declare type number_megabytes = number;
export declare type number_gigabytes = number;
export declare type number_terabytes = number;
/**
 * Semantic helper; For example "SHARE_ICON/EDIT_LINK"
 */
export declare type string_translate_name = string;
/**
 * Semantic helper; For example "ShareIcon/ edit link"
 */
export declare type string_translate_name_not_normalized = string;
/**
 * Semantic helper; For example "cs" or "en"
 * Implementing ISO 639-1
 *
 * TODO: Maybe use enum
 * TODO: Rename - remove string_ prefix like ITranslateLanguageCode
 */
export declare type string_translate_language = 'en' | 'cs' | 'sk' | 'uk';
/**
 * Semantic helper; For example "callbackName" or "renderMe"
 *
 */
export declare type string_javascript_name = string;
export declare type string_token = string;
export declare type string_password = string;
export declare type string_ssh_key = string;
export declare type string_pgp_key = string;
