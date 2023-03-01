// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { Factorable } from '../../../40-utils/IFactory';
import { IMessage } from '../../../50-systems/TranslationsSystem/interfaces/IMessage';
/**
 * Shared props for <SelectComponent/>
 */
export interface IAsyncSelectComponentProps<TItem> {
    /**
     * All options in a list.
     */
    options: Factorable<Promisable<IAsyncSelectComponentOptions<TItem>>>;
    /**
     * Current value
     */
    value: TItem | null;
    /**
     * Callback when value changes.
     *
     * Note: You can return a Promise to render loading the change
     */
    onChange(value: TItem): Promisable<void>;
}
/**
 * Options for <SelectComponent/>
 */
export declare type IAsyncSelectComponentOptions<TItem> = Array<
    Promisable<
        {
            title: IMessage;
        } & (
            | {
                  value: TItem;
              }
            | {
                  value: TItem;
                  isDisabled: false;
              }
            | {
                  value: never;
                  isDisabled: true;
              }
        )
    >
>;
