// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IBaseMessage } from '../../50-systems/TranslationsSystem/interfaces/IMessage';
import { string_icon } from './icons';
interface IConfirmIconProps {
    icon: string_icon;
    onConfirm: () => void;
    className?: string;
    inactive?: boolean;
    title: IBaseMessage;
    subtitle?: IBaseMessage;
}
export declare function ConfirmIcon(props: IConfirmIconProps): JSX.Element;
export {};
/**
 * TODO: [🙋] Make this component more common - not only for one tool (erase)
 */
