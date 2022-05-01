// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { IShortcut } from './IShortcut';
export interface IControls<TValue> {
    /**
     * @default 0
     */
    priority?: number;
    isContinuing?: boolean;
    defaultShortcuts: Map<IShortcut, TValue>;
    executor(options: { value: TValue }): Promisable<void>;
}
/**
 * [🎮] Write descriptions
 */
