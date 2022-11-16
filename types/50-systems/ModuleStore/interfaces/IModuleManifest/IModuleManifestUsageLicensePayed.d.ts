// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IPrice } from '../../../../40-utils/price/IPrice';
import { string_token, string_url } from '../../../../40-utils/typeAliases';
/**
 * Describes licence for usage of a module.
 *
 * @collboard-modules-sdk
 */
export declare type IModuleManifestUsageLicensePayed = {
    type: 'SIMPLE_TOKEN';
    token: string_token;
    price: IPrice;
    /**
     * Note: Using string not URL to ensure whole manifest is JSON serializable.
     */
    buyLink: string_url;
    /**
     * Is module installed automatically when the license is activated
     * - If false modules behave like a normal module, only change is that it now can be installed in the module store
     * - If true module is installed immediately and this installation is connected with the user NOT the board
     *           Also the module is excluded from module store
     */
    isModuleAutoInstalled: boolean;
};
/**
 * TODO: Maybe move this interdface to LicenseSystem/interfaces
 *       Do not forget to change reference in documents/license-system.md
 */
