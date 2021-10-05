// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IAwaitable } from 'destroyable';
import { IShortcut } from '../interfaces/IShortcut';
export declare type IRegisterShortcutOptions<TValue> =
    | IRegisterShortcutOptionsSingle
    | IRegisterShortcutOptionsMultiple<TValue>;
export declare function multipleRegisterShortcutOptions<TValue>(
    options: IRegisterShortcutOptions<TValue>,
): IRegisterShortcutOptionsMultiple<TValue>;
interface IRegisterShortcutOptionsSingle {
    shortcut: IShortcut;
    executor: () => IAwaitable<void>;
}
interface IRegisterShortcutOptionsMultiple<TValue> {
    shortcuts: Map<IShortcut, TValue>;
    executor: (options: { value: TValue }) => IAwaitable<void>;
}
export {};
