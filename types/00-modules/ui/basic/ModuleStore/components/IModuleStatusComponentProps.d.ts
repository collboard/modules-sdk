// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BusinessSystem } from '../../../../../50-systems/BusinessSystem/0-BusinessSystem';
import { IUsageLicenseInfo } from '../../../../../50-systems/LicenseSystem/IUsageLicenseInfo';
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
import { IModulePersister } from '../../../../../50-systems/ModuleStore/interfaces/IModulePersister';
import { IModuleStatusReporter } from '../../../../../50-systems/ModuleStore/interfaces/IModuleStatusReporter';
export interface IModuleStatusComponentProps {
    shownModule: IModuleManifest;
    moduleStatusReporter: IModuleStatusReporter;
    persister: IModulePersister;
    businessSystem: BusinessSystem;
    usageLicenseInfo: IUsageLicenseInfo;
}
/**
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
