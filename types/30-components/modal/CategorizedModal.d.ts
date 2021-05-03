
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import * as React from 'react';
interface ICategorizedModalProps extends React.PropsWithChildren<{}> {
    title: string | React.ReactNode;
    toggleModal: () => void;
    className?: string;
    wide?: boolean;
    fullSize?: boolean;
}
interface ICategorizedModalState {
    menuOpen: boolean;
}
export declare class CategorizedModal extends React.Component<ICategorizedModalProps, ICategorizedModalState> {
    state: ICategorizedModalState;
    render(): JSX.Element;
}
export declare function CategorizedModalMenu(props: {
    children: JSX.Element;
}): JSX.Element;
export declare function CategorizedModalBody(props: {
    children: JSX.Element;
}): JSX.Element;
export {};

                  