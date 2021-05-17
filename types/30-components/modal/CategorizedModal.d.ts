// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
interface ICategorizedModalProps extends React.PropsWithChildren<{}> {
    /**
     * Modal title
     */
    title: string | React.ReactNode;
    /**
     * Callback on modal closed or clicked on the page overlay
     */
    toggleModal: () => void;
    /**
     * Additional class name of the modal component
     */
    className?: string;
    /**
     * Is the modal wide?
     *
     * *Note: this is highly suggested*
     */
    wide?: boolean;
    /**
     * Is the modal full page height?
     *
     * *Note: this is highly suggested*
     */
    fullSize?: boolean;
}
interface ICategorizedModalState {
    menuOpen: boolean;
}
/**
 * Categorized modal component
 *
 * Wrap the CategorizedModal contents with `CategorizedModalMenu`
 * and `CategorizedModalBody` components
 *
 * @collboard-modules-sdk
 */
export declare class CategorizedModal extends React.Component<ICategorizedModalProps, ICategorizedModalState> {
    state: ICategorizedModalState;
    render(): JSX.Element;
}
/**
 * Categorized modal left sidebar wrapper
 *
 * @collboard-modules-sdk
 */
export declare function CategorizedModalMenu(props: { children: JSX.Element }): JSX.Element;
/**
 * Categorized modal main body wrapper
 *
 * @collboard-modules-sdk
 */
export declare function CategorizedModalBody(props: { children: JSX.Element }): JSX.Element;
export {};
