// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { ISystemsExtended } from '../50-systems/00-SystemsContainer/ISystems';
import { AppState } from '../50-systems/AppState/0-AppState';
import { MaterialArtVersioningSystem } from '../50-systems/ArtVersionSystem/0-MaterialArtVersioningSystem';
import { AttributesSystem } from '../50-systems/AttributesSystem/0-AttributesSystem';
interface IBoardComponentFloatingMenuProps {
    systems: ISystemsExtended;
}
export declare class BoardComponentFloatingMenu extends React.Component<IBoardComponentFloatingMenuProps> {
    render(): JSX.Element;
}
interface IBoardComponentFloatingMenuInnerProps extends IBoardComponentFloatingMenuProps {
    appState: AppState;
    materialArtVersioningSystem: MaterialArtVersioningSystem;
    attributesSystem: AttributesSystem;
}
export declare class BoardComponentFloatingMenuInner extends React.Component<IBoardComponentFloatingMenuInnerProps> {
    render(): JSX.Element;
}
export {};
