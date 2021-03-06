// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
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
interface IConfirmIconState {
    modalOpen: boolean;
}
export declare class ConfirmIcon extends React.Component<IConfirmIconProps, IConfirmIconState> {
    state: IConfirmIconState;
    private clickHandler;
    private modalNoHandler;
    private modalYesHandler;
    render(): JSX.Element;
}
export {};
/**
 * TODO: [🏛️] Convert Class components to Functional (with hooks).
 */
