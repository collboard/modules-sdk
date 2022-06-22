// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { AppState } from '../../../../50-systems/AppState/0-AppState';
import { ExportSystem } from '../../../../50-systems/ExportSystem/0-ExportSystem';
import { TranslationsSystem } from '../../../../50-systems/TranslationsSystem/0-TranslationsSystem';
interface IHtmlPreviewComponentProps {
    appState: AppState;
    exportSystem: ExportSystem;
    translationsSystem: TranslationsSystem;
}
/**
 *
 * @not-collboard-modules-sdk
 */
export declare function HtmlPreviewComponent({
    exportSystem,
    appState,
    translationsSystem,
}: IHtmlPreviewComponentProps): JSX.Element;
export {};
