// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_mime_type } from '../typeAliases';
/**
 * Checks if the given file is executable.
 *
 * - Windows executables are identified as executable
 * - Javascript executables are identified as executable
 * - CSS Styleshees are considered as executable
 * - ⚠️ It is not bulletproof - Other languages can be marked as non-executables
 *
 * @param file checked file or its mime type
 * @returns true if file is executable
 *
 * @collboard-modules-sdk
 */
export declare function isFileExecutable(fileOrType: File | Blob | string_mime_type): Promise<boolean>;
