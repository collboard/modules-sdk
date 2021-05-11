// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from './IDestroyable';
import { ITeardownLogic } from './TeardownLogic';
/**
 * TODO: Unite Registration and Destroyable
 *
 * @collboard-modules-sdk
 */
export declare abstract class Destroyable implements IDestroyable {
    private _destroyed;
    get destroyed(): boolean;
    destroy(): Promise<void>;
    /**
     *
     * @param errorMessage Message that will replace default one before error
     * @param runBeforeError Callback runed before error is thrown; typically this can be some logging
     */
    protected checkWhetherNotDestroyed(errorMessage?: string, runBeforeError?: () => void): void;
    private subdestroyables;
    /**
     * Binds new registration with itself. This registration/destroyable will be destroyed with this.
     * TODO: create remove counterpart to add
     */
    addSubdestroyable(...subdestroyable: ITeardownLogic[]): this;
}
