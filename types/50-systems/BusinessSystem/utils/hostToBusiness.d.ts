// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_host } from '../../../40-utils/typeAliases';
import { BusinessName } from '../configuration/BusinessName';
/**
 * This function converts a hostname to a business name + normalizedHost
 *
 * @param host hostname with optional port like "collboard.com" or "localhost:9977"
 * @returns pair of normalizedHost and businessName
 */
export declare function hostToBusiness(host: string_host): {
    normalizedHost: string_host;
    enforceHttps: boolean;
    businessName: BusinessName;
};
