// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IMessage } from './interfaces/IMessage';
import { ITranslateMessagePicker } from './interfaces/ITranslateMessagePicker';
/**
 * AgnosticMessagePicker just takes input and merges it to output.
 */
export declare class AgnosticMessagePicker implements ITranslateMessagePicker {
    pickStringMessage(message: IMessage): string;
    pickMessage(message: IMessage): JSX.Element;
}
