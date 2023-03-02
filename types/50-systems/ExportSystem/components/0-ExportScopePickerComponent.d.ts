// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IExportScope } from '../interfaces/IExportScope';
interface IExportScopePickerComponentProps {
    value: IExportScope | null;
    onChange(exportScope: IExportScope): void;
}
/**
 * Picker for export scope (=which arts to include in export)
 * Note: Need to be used inside of a module
 *
 * @collboard-modules-sdk
 */
export declare function ExportScopePickerComponent({ value, onChange }: IExportScopePickerComponentProps): JSX.Element;
export { };
/**
 * TODO: Listen for new frames
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
