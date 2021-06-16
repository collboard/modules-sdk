import { IDestroyable } from './IDestroyable';
import { ITeardownLogic, teardown } from './TeardownLogic';

/**
 * Note: THIS IS A COPY. Do not edit it here but:
 * https://github.com/collboard/collboard/tree/refactoring/persisting-connector-advanced/src/40-utils/destroyables
 *
 */
export abstract class Destroyable implements IDestroyable {
    private _destroyed = false;
    public get destroyed(): boolean {
        return this._destroyed;
    }
    public async destroy(): Promise<void> {
        this.checkWhetherNotDestroyed();
        // console.log(`Destroying`, this);
        for (const subdestroyable of this.subdestroyables) {
            await teardown(subdestroyable);
        }
        this._destroyed = true;
    }

    /**
     *
     * @param errorMessage Message that will replace default one before error
     * @param runBeforeError Callback runed before error is thrown; typically this can be some logging
     */
    protected checkWhetherNotDestroyed(errorMessage?: string, runBeforeError?: () => void) {
        if (this._destroyed) {
            if (runBeforeError) {
                runBeforeError();
            }
            throw new Error(errorMessage || `This object is already destroyed.`);
        }
    }

    private subdestroyables: ITeardownLogic[] = [];

    /**
     * Binds new registration with itself. This registration/destroyable will be destroyed with this.
     * TODO: create remove counterpart to add
     */
    public addSubdestroyable(...subdestroyable: ITeardownLogic[]): this {
        this.subdestroyables.push(...subdestroyable);
        return this;
    }
}
