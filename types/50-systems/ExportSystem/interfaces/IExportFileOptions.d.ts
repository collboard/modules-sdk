// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_mime_type_with_wildcard } from '../../../40-utils/typeAliases';
import { ArrayableFull, FlipOptional } from '../../../40-utils/typeHelpers';
import { IExportScope } from './IExportScope';
/**
 * Options for file export
 *
 * @not-collboard-modules-sdk
 */
export interface IExportFileOptions {
    /**
     * Which arts should be exported
     *
     */
    scope: IExportScope;
    /**
     * What mime types you are interested in
     *
     * For example:
     * - Specify exact types ['image/png', 'image/jpeg','application/pdf']
     * - Specify wildcard types ['image/*']
     * - Specify all types ['*']
     */
    mimeType: ArrayableFull<string_mime_type_with_wildcard>;
    /**
     * Should be heavy (=takes lot of resources) exports included?
     *
     * @default false
     */
    isHeavyExport?: boolean;
    /**
     * Quality of the exported image
     * It should be between 0 and 1 (=100%)
     *
     * Note: There are two distinct options influencing quality of export - `quality` and `scale`
     * @default 0.85
     */
    quality?: number;
    /**
     * Enlarge the exported image against default zoom scale
     *
     * Note: There are two distinct options influencing quality of export - `quality` and `scale`
     * @default 1
     */
    scale?: number;
    /**
     * Incorporate external sources into exported file
     *
     * @default false
     */
    isMaterialized?: boolean;
    /**
     * Link to the live board
     *
     * @default false
     */
    isLinked?: boolean;
    /**
     * Keep board background transparent
     *
     * @default true
     */
    isTransparent?: boolean;
    /**
     * Export should contain texting UI elements / testing metadata
     *
     * @default false
     */
    isTesting?: boolean;
}
export declare const EXPORT_FILE_DEFAULT_OPTIONS: FlipOptional<IExportFileOptions>;
/**
 * TODO: [🍸] Some way how the supporter can tell additional options + some of listed options above are not relevant for all exporters
 * TODO: Probbably allow more scopes> scope: IArrayableFull<IExportScope>
 * TODO: Find the best quality value
 */
