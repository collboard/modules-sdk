// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { AbstractSystem } from '../AbstractSystem';
import { IClosePreventable } from './IClosePreventable';
/**
 * @collboard-system
 */
export declare class ClosePreventionSystem extends AbstractSystem implements IClosePreventable, IDestroyable {
    protected init(): Promise<void>;
    private reasons;
    register(...reasons: IClosePreventable[]): import('destroyable').Registration;
    get canBeClosed(): boolean;
    private beforeunloadHandler;
}
