// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IExportScope } from '../interfaces/IExportScope';
import { IPreparedFileExporting } from '../interfaces/IPreparedFileExport';
interface IExporterPickerComponentProps {
    scope: IExportScope;
    value: IPreparedFileExporting | null;
    onChange(preparedFileExporting: IPreparedFileExporting): void;
}
/**
 * Picker for exporter (=module =mime type) to use for exporting
 * Note: Need to be used inside of a module
 *
 * @collboard-modules-sdk
 */
export declare function ExporterPickerComponent({ scope, value, onChange }: IExporterPickerComponentProps): JSX.Element;
export { };
/**
 * TODO: [1] Listen for new exporters
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
