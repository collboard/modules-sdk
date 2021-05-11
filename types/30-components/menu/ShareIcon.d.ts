// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import React from 'react';
import { RoutingSystem } from '../../50-systems/RoutingSystem/0-RoutingSystem';
interface IShareIconProps {
    routingSystem: RoutingSystem;
    className?: string;
    small?: boolean;
}
interface IShareIconState {
    modalOpen: boolean;
    copied: [boolean, boolean];
}
export declare class ShareIcon extends React.Component<IShareIconProps, IShareIconState> {
    state: IShareIconState;
    toggleModal(): void;
    copy(index: number, event: React.MouseEvent<HTMLSpanElement>): void;
    render(): JSX.Element;
}
export {};
