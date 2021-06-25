// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

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
 * For example `"❤️"`
 * @collboard-modules-sdk
 */
export declare type string_char_emoji = string;
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
 * For example `"https://collboard.com/9SeSQTupmQHwuSrLi"`
 * @collboard-modules-sdk
 */
export declare type string_url = string;
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
 * For example `"/foo/bar.png"`
 * @collboard-modules-sdk
 */
export declare type string_file_path = string;
/**
 * Semantic helper
 *
 * - basically module identifier
 *
 * For example `"FreehandTool"`
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
 * License with its name and url like in package.json
 *
 * @collboard-modules-sdk
 */
export interface ILicense {
    type?: string_license;
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
export declare type IKeywords = string_keyword[];
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
