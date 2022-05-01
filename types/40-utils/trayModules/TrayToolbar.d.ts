// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { TouchController } from 'touchcontroller';
import { TranslationsSystem } from '../../50-systems/TranslationsSystem/0-TranslationsSystem';
import { ITrayDynamicDefinition } from './interfaces/ITrayDynamicItemTypes';
export interface ITrayToolbarProps {
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    onClose: () => void;
    setToolbarBodyRef?: (object: HTMLDivElement) => void;
    touchController: TouchController;
    setSelectedItemId: (newId: string | null) => void;
    trayDefinition: ITrayDynamicDefinition;
    translationsSystem: TranslationsSystem;
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
