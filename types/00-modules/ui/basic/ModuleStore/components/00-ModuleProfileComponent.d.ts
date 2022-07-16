// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
import { TranslationsSystem } from '../../../../../50-systems/TranslationsSystem/0-TranslationsSystem';
interface IIModuleProfileComponentProps {
    manifest: IModuleManifest;
    translationsSystem: TranslationsSystem;
}
export declare function ModuleProfileComponent({
    manifest,
    translationsSystem,
}: IIModuleProfileComponentProps): JSX.Element;
export {};
/**
 * TODO: @hejny ->  @roseckyj Design this component - profile page of the module
 * TODO: Probbably allow to install/uninstall/change setting from here
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
