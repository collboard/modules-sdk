// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_url } from '../typeAliases';
/**
 * Makes GET request and return response as a file.
 *
 * @collboard-modules-sdk
 */
export declare function fetchAsFile(url: URL | string_url, proxyUrl?: URL | string_url): Promise<File>;
/**
 * TODO: Probably some other way to pass proxyUrl - maybe with high order function?
 */
