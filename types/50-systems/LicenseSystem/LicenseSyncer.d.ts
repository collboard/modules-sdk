// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { string_license_token } from '../../40-utils/typeAliases';
import { ISyncer } from '../ModuleStore/interfaces/ISyncer';
import { AbstractSyncer } from '../ModuleStore/Syncers/AbstractSyncer';
/**
 * LicenseSyncer installs / uninstalls modules according to (payed) license which has flag isModuleAutoInstalled
 *
 * @private
 * @collboard-system
 */
export declare class LicenseSyncer extends AbstractSyncer implements ISyncer, IDestroyable {
    private queue;
    syncSupportForLicenses(...usageLicensesTokens: Array<string_license_token>): Promise<unknown>;
    destroy(): Promise<void>;
}
/**
 * Note: [☠️] LicenseSyncer is not in syncers folder but in its own specific place
 */
