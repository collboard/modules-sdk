// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BehaviorSubject } from 'rxjs';
import { string_license_token } from '../../40-utils/typeAliases';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { IModuleManifest } from '../ModuleStore/interfaces/IModuleManifest/IModuleManifest';
import { IModuleManifestUsageLicense } from '../ModuleStore/interfaces/IModuleManifest/IModuleManifestUsageLicense';
import { IUsageLicenseInfo } from './interfaces/IUsageLicenseInfo';
/**
 * LicenseSystem is a system that manages the licenses for modules
 *
 * @see more on https://github.com/collboard/collboard/blob/main/documents/license-system.md
 * @collboard-system
 */
export declare class LicenseSystem extends AbstractSystem {
    private storage;
    readonly licensesTokens: BehaviorSubject<string[]>;
    protected init(): Promise<void>;
    private activateLicenseTokensFromGetParams;
    activateLicenseToken(licenseToken: string_license_token): Promise<void>;
    removeLicenseToken(licenseToken: string_license_token): Promise<void>;
    getModuleLicences(moduleManifest: IModuleManifest): Promise<Array<IModuleManifestUsageLicense>>;
    getModuleLicenceInfo(moduleManifest: IModuleManifest): Promise<IUsageLicenseInfo>;
    hasModuleValidLicence(moduleManifest: IModuleManifest): Promise<boolean>;
}
/**
 * TODO: Sign token and also sign date limitations
 */
