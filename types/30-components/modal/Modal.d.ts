
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import * as React from 'react';
import { ISystems } from '../../50-systems/00-SystemsContainer/ISystems';
export interface IModalProps extends React.PropsWithChildren<{}> {
    title: string | React.ReactNode;
    onClickOverlay?: () => void;
    onClickClose?: () => void;
    className?: string;
    wide?: boolean;
    fullSize?: boolean;
    renderExtraJsx?: boolean;
    systemsContainer?: ISystems;
}
export declare class Modal extends React.Component<IModalProps> {
    render(): JSX.Element;
}

                  