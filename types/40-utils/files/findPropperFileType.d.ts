// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_mime_type } from '../typeAliases';
/**
 * Find propper file type to given file or blob
 *
 * Note: For unknown types there will be returned 'application/octet-stream'
 * Note: Charset will be stripped from file type
 *
 * @param file File or Blob which will be analyzed
 * @returns string with propper type like 'text/plain'
 *
 * @collboard-modules-sdk
 */
export declare function findPropperFileType(file: File | Blob): Promise<string_mime_type>;
