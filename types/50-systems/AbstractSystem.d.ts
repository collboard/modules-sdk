
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { Destroyable } from '../40-utils/destroyables/Destroyable';
import { IDestroyable } from '../40-utils/destroyables/IDestroyable';
import { ISystems } from './00-SystemsContainer/ISystems';
export declare abstract class AbstractSystem extends Destroyable implements IDestroyable {
    protected readonly systems: ISystems;
    constructor(systems: ISystems);
    protected abstract init(): Promise<void>;
}

                  