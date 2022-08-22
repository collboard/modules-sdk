// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BusinessName } from '../../BusinessSystem/configuration/BusinessName';
import { IBusinessConfiguration } from '../../BusinessSystem/interfaces/IBusinessConfiguration';
import { IModuleManifest } from '../interfaces/IModuleManifest';
import { IModuleSearchCriteria } from '../interfaces/IModuleSearchCriteria';
export declare function isModulePassingSearchCriteria({
    moduleManifest,
    searchCriteria,
    businessName,
    businessConfiguration,
}: {
    searchCriteria: IModuleSearchCriteria;
    moduleManifest?: IModuleManifest;
    businessName?: BusinessName;
    businessConfiguration?: IBusinessConfiguration;
}): boolean;
/**
 * TODO: Unit test
 * TODO: Throw or warn when providing unknown search criteria
 */
