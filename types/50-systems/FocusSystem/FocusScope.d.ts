// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable, IAwaitable, IDestroyable } from 'destroyable';
export declare class FocusScope<TSubject> extends Destroyable implements IDestroyable {
    private active;
    get activeSubject(): TSubject | null;
    private queue;
    takeFocus(options: { subject: TSubject; create: () => IAwaitable<IDestroyable> }): Promise<void>;
    blurFocus(): Promise<void>;
}
