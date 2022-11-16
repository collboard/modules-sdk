// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { BusinessSystem } from '../../../../../50-systems/BusinessSystem/0-BusinessSystem';
import { LicenseSystem } from '../../../../../50-systems/LicenseSystem/0-LicenseSystem';
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest/IModuleManifest';
import { IModulePersister } from '../../../../../50-systems/ModuleStore/interfaces/IModulePersister';
import { IModuleStatusReporter } from '../../../../../50-systems/ModuleStore/interfaces/IModuleStatusReporter';
import { TranslationsSystem } from '../../../../../50-systems/TranslationsSystem/0-TranslationsSystem';
interface IModuleBoxComponentProps {
    manifest: IModuleManifest;
    moduleStatusReporter: IModuleStatusReporter;
    persister: IModulePersister;
    translationsSystem: TranslationsSystem;
    businessSystem: BusinessSystem;
    licenseSystem: LicenseSystem;
}
/**
 * One module in the catalogue (list) in module store
 * Note: This component should be child of <ModulesCatalogueComponent
 */
export declare function ModuleBoxComponent({
    manifest,
    moduleStatusReporter,
    persister,
    translationsSystem,
    businessSystem,
    licenseSystem,
}: IModuleBoxComponentProps): JSX.Element;
export {};
/**
 * TODO: [🏴‍☠️] Across the projects components+files with styled name call WelcomeModalStyle (not WelcomeModalDiv)
 */
/**
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
