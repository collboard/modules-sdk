// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_module_name } from './../../../40-utils/typeAliases';
/**
 * Looks at the file for import-with-module directive
 *
 * @param file where to search
 * @returns name of the native importer module or null if not found
 */
export declare function getFileNativeImporter(file: File): Promise<string_module_name | null>;
/**
 * TODO: Also search in metadata
 * TODO: Allow other formats of import-with-module="@collboard/html-native-import"
 * TODO: Write tests before 👆
 * TODO: Scenarios when more than one import-with-module found
 */
