// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Takeable } from './Takeable';
export interface ITakeChain<TValue extends Takeable> {
    readonly value: TValue;
    then<TResultValue extends Takeable>(
        callback: (value: TValue) => TResultValue,
    ): TResultValue & ITakeChain<TResultValue>;
}
/**
 * TODO: ITakeChain should implementing PromiseLike interface
 * TODO: Maybe method finally
 */
