// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { BusinessSystem } from '../../../../../50-systems/BusinessSystem/0-BusinessSystem';
import { IUsageLicenseInfo } from '../../../../../50-systems/LicenseSystem/interfaces/IUsageLicenseInfo';
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest/IModuleManifest';
import { IModulePersister } from '../../../../../50-systems/ModuleStore/interfaces/IModulePersister';
import { IModuleStatusReporter } from '../../../../../50-systems/ModuleStore/interfaces/IModuleStatusReporter';
interface IModuleStatusComponentProps {
    shownModule: IModuleManifest;
    moduleStatusReporter: IModuleStatusReporter;
    persister: IModulePersister | null;
    businessSystem: BusinessSystem;
    usageLicenseInfo: IUsageLicenseInfo;
}
export declare function ModuleStatusComponent({
    shownModule,
    moduleStatusReporter,
    persister,
    usageLicenseInfo,
}: IModuleStatusComponentProps): JSX.Element;
export {};
/**
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
