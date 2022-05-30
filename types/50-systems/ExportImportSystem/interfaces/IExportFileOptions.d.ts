// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_mime_type_with_wildcard } from '../../../40-utils/typeAliases';
import { IArrayableFull } from '../../../40-utils/typeHelpers';
import { IExportScope } from './IExportScope';
import { ImportStrategy } from './ImportStrategy';
/**
 * Options for file export
 *
 * @not-collboard-modules-sdk
 */
export interface IExportFileOptions {
    /**
     * Which arts should be exported
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
    mimeType: IArrayableFull<string_mime_type_with_wildcard>;
    /**
     * Requirements for external sources
     */
    importStrategy: ImportStrategy;
    /**
     * Should be heavy (=takes lot of resources) exports included?
     */
    isHeavyIncluded?: boolean;
    /**
     * Export should contain texting UI elements / testing metadata
     */
    isTesting?: boolean;
}
