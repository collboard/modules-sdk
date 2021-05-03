
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { Registration } from '../../40-utils/destroyables/Registration';
import { AbstractSystem } from '../AbstractSystem';
import { IRegisterShortcutOptions } from './utils/IRegisterShortcutOptions';
/**
 * ShortcutsSystem can register and manage keyboard shortcuts like Ctrl + C by modules (or maybe other systems).
 */
export declare class ShortcutsSystem extends AbstractSystem {
    private currentlyPressedKeys;
    private shortcutPairs;
    protected init(): Promise<void>;
    registerShortcut<TValue>(options: IRegisterShortcutOptions<TValue>): Registration;
    private registerOneShortcut;
    private findRegisteredShortcut;
    private executeShortcutsToCurrentlyPressedKeys;
    private registerListeners;
}
/**
 * General TODOs:
 *
 * - Can we somehow capture modifying key when not focused?
 *     For example I press Control of other window then click on Collboard and press ArrowUp, now I dont get Control+ArrowUp result but only ArrowUp.
 *     But in native events like zooming this modifying is captured
 */

                  