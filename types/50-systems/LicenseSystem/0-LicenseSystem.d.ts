// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { IModuleManifest, IModuleManifestUsageLicense } from '../ModuleStore/interfaces/IModuleManifest';
import { IUsageLicenseInfo } from './IUsageLicenseInfo';
/**
 * LicenseSystem is a system that manages the licenses for modules
 *
 * @collboard-system
 */
export declare class LicenseSystem extends AbstractSystem {
    private storage;
    private licenses;
    protected init(): Promise<void>;
    getModuleLicences(moduleManifest: IModuleManifest): Promise<Array<IModuleManifestUsageLicense>>;
    getModuleLicenceInfo(moduleManifest: IModuleManifest): Promise<IUsageLicenseInfo>;
    hasModuleLicence(moduleManifest: IModuleManifest): Promise<boolean>;
}
