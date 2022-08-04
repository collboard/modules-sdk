// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import {
    string_file_extension,
    string_host,
    string_module_name,
    string_protocol,
    string_uri,
    string_uri_part,
} from '../../../40-utils/typeAliases';
import { BusinessName } from '../../BusinessSystem/configuration/BusinessName';
/**
 * Matches a Collboard uri adress
 *
 * For examples of valid/invalid uris:
 *     @see https://regex101.com/r/irJH7h/1
 *     @see /src/50-systems/RoutingSystem/routePath/decodeUrl.test.ts
 *
 * @collboard-modules-sdk
 */
export declare const URI_PATTERN: RegExp;
/**
 * Represents URL in parsed from
 *
 * @collboard-modules-sdk
 */
export interface IUrlVariables {
    protocol: string_protocol;
    host: string_host;
    businessName: BusinessName;
    uriId?: string_uri_part | null;
    extension?: string_file_extension | null;
    module?: string_module_name | null;
    modulePath?: string_uri | null;
    /**
     * Note: Only for everstorage library
     */
    [key: string]: string | null | undefined;
}
/**
 * Defaults for IUrlVariables
 *
 * @collboard-modules-sdk
 */
export declare const DEFAULT_URL_VARIABLES: IUrlVariables;
/**
 * TODO: Do more constraints on IUrlVariables:
 *       - modulePath can not be defined if module is undefined
 *       - ...
 */
