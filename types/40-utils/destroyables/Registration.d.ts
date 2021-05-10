
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IAwaitable } from '../IAwaitable';
import { ISubscription } from '../ISubscription';
import { Destroyable } from './Destroyable';
import { IDestroyable } from './IDestroyable';
import { ITeardownLogic } from './TeardownLogic';
/**
 * This object will be returned by register functions to unregister things
 * TODO: Unite Registration and Destroyable
 * TODO: Maybe create some Registration.create helper for MobX observe/intercept
 *
 * @collboard-modules-sdk
 */
export declare class Registration extends Destroyable implements IDestroyable {
    private teardownLogic;
    /**
     *
     * TODO: Use in all places where manually setting up  pair things
     */
    static create(creator: () => IAwaitable<ITeardownLogic>): Registration;
    static join(...registrations: Array<IAwaitable<IDestroyable | undefined>>): Registration;
    static fromSubscription(subscriptionFactory: (registerAdditionalSubscription: (additionalSubscription: ISubscription) => void) => ISubscription): Registration;
    static void(): Registration;
    /**
     *
     * TODO: Use in all places where manually setting up the listeners
     */
    static createEventListener<TEvent extends Event>({ element, type, listener, options, }: {
        element: HTMLElement | Document | 'BOARD';
        type: string;
        listener: (event: TEvent) => any;
        options?: boolean | AddEventListenerOptions;
    }): Registration;
    constructor(teardownLogic: (() => IAwaitable<void>) | IDestroyable);
    destroy(): Promise<void>;
}

                  