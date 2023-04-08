// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_hostname } from './typeAliases';
/**
 * Checks if an IP address or hostname is reserved for private networks or localhost.
 *
 * @param {string} ipAddress - The IP address to check.
 * @returns {boolean} Returns true if the IP address is reserved for private networks or localhost, otherwise false.
 */
export declare function isPrivateNetwork(hostname: string_hostname): boolean;
