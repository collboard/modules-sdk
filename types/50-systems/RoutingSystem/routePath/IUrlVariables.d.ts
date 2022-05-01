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
export interface IUrlVariables {
    protocol: string_protocol;
    host: string_host;
    businessName: BusinessName;
    uriId?: string_uri_part | null;
    extension?: string_file_extension | null;
    module?: string_module_name | null;
    modulePath?: string_uri | null;
    [key: string]: string | null | undefined;
}
export declare const DEFAULT_URL_VARIABLES: IUrlVariables;
