// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { AppState } from './../../AppState/0-AppState';
import { TranslationsSystem } from './../../TranslationsSystem/0-TranslationsSystem';
import { ExportSystem } from './../0-ExportSystem';
interface IDownloadPreviewComponentProps {
    appState: AppState;
    exportSystem: ExportSystem;
    translationsSystem: TranslationsSystem;
}
/**
 * @collboard-modules-sdk
 */
export declare function DownloadPreviewComponent({
    exportSystem,
    translationsSystem,
    appState,
}: IDownloadPreviewComponentProps): JSX.Element;
export {};
