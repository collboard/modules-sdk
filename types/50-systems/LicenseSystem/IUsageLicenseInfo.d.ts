// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import {
    IModuleManifestUsageLicense,
    IModuleManifestUsageLicensePayed,
} from '../ModuleStore/interfaces/IModuleManifest';
export declare type IUsageLicenseInfo = IUsageLicenseInfoInvalid | IUsageLicenseInfoValid;
interface IUsageLicenseInfoInvalid {
    isValid: false;
    licenseToBuy: IModuleManifestUsageLicensePayed | null;
}
interface IUsageLicenseInfoValid {
    isValid: true;
    license: IModuleManifestUsageLicense;
}
export {};
/**
 * TODO: Probbaly better name for IUsageLicenseInfo
 */
