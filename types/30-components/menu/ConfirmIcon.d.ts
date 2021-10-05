// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
import { string_icon } from './icons';
interface IConfirmIconProps {
    icon: string_icon;
    onConfirm: () => void;
    className?: string;
    inactive?: boolean;
    title: string;
    subtitle?: string;
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
