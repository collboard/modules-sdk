// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable, IDestroyable } from 'destroyable';
import { ISystemsExtended } from './00-SystemsContainer/ISystems';
export declare abstract class AbstractSystem extends Destroyable implements IDestroyable {
    protected readonly systems: ISystemsExtended;
    constructor(systems: ISystemsExtended);
    private _isReady;
    /**
     * Promise which is resolved when the system is initialized and ready to use.
     */
    readonly ready: Promise<void>;
    /**
     * Checks if the system is initialized and ready to use.
     * @returns {boolean}
     */
    get isReady(): boolean;
    protected abstract init(): Promise<void>;
    /**
     * Checks if the system is initialized and ready to use.
     * If not, throws an error.
     * If it is, do nothing.
     */
    protected checkIsReady(): void;
}
