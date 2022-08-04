// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
/**
 * PointerSystem allows us to bind a different controller then touch or mouse. For example, it is syncing the phone with accelerometer or VR controllers.
 *
 * @private
 * @collboard-system
 */
export declare class PointerSystem extends AbstractSystem {
    protected init(): Promise<void>;
}
/**
 * TODO: To LIB touchcontroller
 */
