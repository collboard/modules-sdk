// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_mime_type_with_wildcard } from '../../../40-utils/typeAliases';
/**
 *
 * @collboard-modules-sdk
 */
export declare enum ExportScope {
    Selection = 'SELECTION',
    Board = 'BOARD',
}
export interface IExportFileOptions {
    scope: ExportScope;
    mimeType: string_mime_type_with_wildcard;
    isHeavyIncluded?: boolean;
}
/**
 * TODO: !! proppably schope should be passed manually as arts
 * TODO: [🏫] Some way how to scope IFramable
 * TODO: [🌿] Maybe add priority into IExportFileOptions with auto install mechanism from external module store
 */
