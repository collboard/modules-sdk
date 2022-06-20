// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_module_name } from './typeAliases';
/**
 * Parse Collboard module name
 * @see more in MODULE_NAME_REGEX
 *
 * @param moduleName
 * @returns normalized scope and name
 *
 * @collboard-modules-sdk
 */
export declare function parseModuleName(moduleName: string_module_name): {
    scope: string;
    name: string[];
};
