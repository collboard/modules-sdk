// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_url } from './typeAliases';
/**
 * Check if given url exists and is accessible
 *
 * @param url url to check
 * @returns true if url is valid and returns 200 status code
 *
 * @collboard-modules-sdk
 */
export declare function isFetchable(url: string_url | URL): Promise<boolean>;
