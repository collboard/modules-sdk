// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import * as React from 'react';
import { ISystemsExtended } from '../50-systems/00-SystemsContainer/ISystems';
import { AppState } from '../50-systems/AppState/0-AppState';
import { ToolbarSystem } from '../50-systems/ToolbarSystem/0-ToolbarSystem';
interface IBoardComponentSelectionProps {
    systems: ISystemsExtended;
}
export declare class BoardComponentSelection extends React.Component<IBoardComponentSelectionProps> {
    render(): JSX.Element;
}
interface IBoardComponentSelectionInnerProps extends IBoardComponentSelectionProps {
    appState: AppState;
    toolbarSystem: ToolbarSystem;
}
export declare class BoardComponentSelectionInner extends React.Component<IBoardComponentSelectionInnerProps> {
    render(): JSX.Element;
}
export {};
