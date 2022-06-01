// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { ExportSystem } from '../0-ExportSystem';
import { IExportScope } from '../interfaces/IExportScope';
import { IPreparedFileExporting } from '../interfaces/IPreparedFileExport';
interface IExporterPickerComponentProps {
    exportSystem: ExportSystem;
    scope: IExportScope;
    value: IPreparedFileExporting | null;
    onChange(preparedFileExporting: IPreparedFileExporting): void;
}
/**
 * @collboard-modules-sdk
 */
export declare function ExporterPickerComponent({
    exportSystem,
    scope,
    value,
    onChange,
}: IExporterPickerComponentProps): JSX.Element;
export {};
/**
 * TODO: [1] Listen for new exporters
 */
