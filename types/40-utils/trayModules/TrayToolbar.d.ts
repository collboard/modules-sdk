// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
import { TouchController } from 'touchcontroller';
import { ITrayDefinition } from './TrayItemTypes';
export interface ITrayToolbarProps {
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    onClose: () => void;
    setToolbarBodyRef?: (object: HTMLDivElement) => void;
    touchController: TouchController;
    setSelectedItemId: (newId: string | null) => void;
    trayDefinition: ITrayDefinition;
}
interface ITrayToolbarState {
    tab: number;
    open: boolean;
}
export declare class TrayToolbar extends React.Component<ITrayToolbarProps, ITrayToolbarState> {
    state: ITrayToolbarState;
    componentDidMount(): void;
    startOpeningAnimation(): Promise<void>;
    render(): JSX.Element;
}
export {};
