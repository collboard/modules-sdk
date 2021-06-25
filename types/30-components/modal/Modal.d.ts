// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
export interface IModalProps extends React.PropsWithChildren<{}> {
    /**
     * Modal title
     */
    title: string | React.ReactNode;
    /**
     * Callback on page overlay clicked
     *
     * *Note: it is highly suggested to use same action as `onClickClose`*
     */
    onClickOverlay?: () => void;
    /**
     * Callback on modal close button clicked
     *
     * When not set, the modal does not have the close button
     */
    onClickClose?: () => void;
    /**
     * Additional class name of the modal component
     */
    className?: string;
    /**
     * Is the modal wide?
     */
    wide?: boolean;
    /**
     * Is the modal full page height?
     */
    fullSize?: boolean;
}
/**
 * Modal component
 *
 * @collboard-modules-sdk
 */
export declare class Modal extends React.Component<IModalProps> {
    render(): JSX.Element;
}
