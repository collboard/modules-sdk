// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IFramable } from './IFramable';
/**
 * Export scope specifies which arts should be exported
 *
 * @collboard-modules-sdk
 */
export declare type IExportScope = ExportScopeSimple | IFramable;
/**
 * Simple export scopes
 *
 * @collboard-modules-sdk
 */
export declare enum ExportScopeSimple {
    Selection = 'SELECTION',
    Board = 'BOARD',
}
