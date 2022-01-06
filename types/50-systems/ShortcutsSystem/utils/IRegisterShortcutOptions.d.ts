// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { IShortcut } from '../interfaces/IShortcut';
export declare type IRegisterShortcutOptions<TValue> =
    | IRegisterShortcutOptionsSingle
    | IRegisterShortcutOptionsMultiple<TValue>;
export declare function multipleRegisterShortcutOptions<TValue>(
    options: IRegisterShortcutOptions<TValue>,
): IRegisterShortcutOptionsMultiple<TValue>;
interface IRegisterShortcutOptionsSingle {
    shortcut: IShortcut;
    executor: () => Promisable<void>;
}
interface IRegisterShortcutOptionsMultiple<TValue> {
    shortcuts: Map<IShortcut, TValue>;
    executor: (options: { value: TValue }) => Promisable<void>;
}
export {};
