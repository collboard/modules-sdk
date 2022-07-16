// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable, Registration } from 'destroyable';
import { IClosePreventable } from './IClosePreventable';
import { IClosePreventionSystem } from './IClosePreventionSystem';
/**
 * FakeClosePreventionSystem is a implementation of IClosePreventionSystem which satisfy the interface but does nothing.
 * @collboard-modules-sdk
 */
export declare class FakeClosePreventionSystem extends Destroyable implements IClosePreventionSystem {
    registerClosePrevention(...reasons: Array<IClosePreventable>): Registration;
    get canBeClosed(): boolean;
}
