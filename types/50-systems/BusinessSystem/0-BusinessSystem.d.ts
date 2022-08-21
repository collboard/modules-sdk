// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { BusinessName } from './configuration/BusinessName';
import { IBusinessConfiguration } from './interfaces/IBusinessConfiguration';
/**
 * BusinessSystem tell things about currently used business
 *
 * @private
 * @collboard-system
 */
export declare class BusinessSystem extends AbstractSystem {
    readonly businessName: Promise<BusinessName>;
    readonly businessConfiguration: Promise<IBusinessConfiguration>;
    constructor(systems: ISystemsExtended);
    protected init(): Promise<void>;
}
