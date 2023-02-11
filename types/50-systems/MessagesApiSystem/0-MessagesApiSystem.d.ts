// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
/**
 * System that recieves and executes the post message API
 *
 * @collboard-system
 */
export declare class MessagesApiSystem extends AbstractSystem implements IDestroyable {
    protected init(): Promise<void>;
    private messageQueue;
    private performMessage;
    emitEvent(eventData: any): void;
}
/**
 * TODO: processMessage maybe public
 * TODO: There should be some concept of private system
 * TODO: This (or some similar) system should manage console access
 * TODO: messageQueue maybe ThrottleQueue (not a simple Queue)
 */
