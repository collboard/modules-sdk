// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { string_data_url } from '../typeAliases';
/**
 * Convert Blob or File to string data url
 * Tip: Consider using ObjectUrl class instead
 * Tip: You can pass dataurl and it will be returned as is
 *
 * @collboard-modules-sdk
 */
export declare function blobToDataUrl(source: Blob | File | string_data_url): Promisable<string_data_url>;
/**
 * TODO: Throw warning when dataUrl is not valid due to its length
 */
