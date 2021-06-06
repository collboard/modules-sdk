// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Destroyable } from '../../40-utils/destroyables/Destroyable';
import { IDestroyable } from '../../40-utils/destroyables/IDestroyable';
import { IAwaitable } from '../../40-utils/IAwaitable';
export declare class FocusScope<TSubject> extends Destroyable implements IDestroyable {
    private active;
    get activeSubject(): TSubject | null;
    takeFocus(options: { subject: TSubject; destroyable: IAwaitable<IDestroyable> }): Promise<void>;
    blurFocus(): Promise<void>;
}
