// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IBaseMessage } from '../../50-systems/TranslationsSystem/interfaces/IMessage';
interface IAlertDialogueOptions {
    /**
     * TODO: Accept JSX when maked betted
     */
    message: IBaseMessage;
}
/**
 *
 * @collboard-modules-sdk
 */
export declare function alertDialogue(options: IAlertDialogueOptions | IBaseMessage): Promise<void>;
export {};
