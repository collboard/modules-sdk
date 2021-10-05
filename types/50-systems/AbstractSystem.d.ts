// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable, IDestroyable } from 'destroyable';
import { ISystemsExtended } from './00-SystemsContainer/ISystems';
export declare abstract class AbstractSystem extends Destroyable implements IDestroyable {
    protected readonly systems: ISystemsExtended;
    constructor(systems: ISystemsExtended);
    protected abstract init(): Promise<void>;
}
