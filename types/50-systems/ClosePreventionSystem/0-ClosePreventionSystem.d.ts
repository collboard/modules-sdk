// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

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
