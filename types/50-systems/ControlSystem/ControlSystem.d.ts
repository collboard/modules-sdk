// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Registration } from 'destroyable';
import { BehaviorSubject } from 'rxjs';
import { AbstractSystem } from '../AbstractSystem';
import { IControl } from './interfaces/IControl';
import { IShortcut } from './interfaces/IShortcut';
import { IRegisterControlOptions } from './utils/controlToControls';
/**
 * ControlSystem can register and manage keyboard shortcuts like Ctrl + C by modules (or maybe other systems).
 *
 * @collboard-system
 */
export declare class ControlSystem extends AbstractSystem {
    readonly pressedKeys: BehaviorSubject<IShortcut>;
    readonly controls: BehaviorSubject<IControl[]>;
    protected init(): Promise<void>;
    registerControl<TValue>(options: IRegisterControlOptions<TValue>): Registration;
    private registerOneShortcut;
    private executeShortcutsToCurrentlyPressedKeys;
    private registerListeners;
}
/**
 *
 * TODO: Add gamecontroller shortcuts
 * TODO: Can we somehow capture modifying key when not focused?
 *     For example I press Control of other window then click on Collboard and press ArrowUp, now I dont get Control+ArrowUp result but only ArrowUp.
 *     But in native events like zooming this modifying is captured
 *
 * TODO: [🎮] Add registrees to controls
 * TODO: [🎮] Sign this system
 * TODO: [🎮] IManifest (with hierarchy)
 *
 * TODO: [🎮] Test combinations with wheel
 *
 */
