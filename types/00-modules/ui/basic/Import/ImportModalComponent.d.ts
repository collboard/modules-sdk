// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import * as React from 'react';
import { MaterialArtVersioningSystem } from '../../../../50-systems/ArtVersionSystem/0-MaterialArtVersioningSystem';
import { RoutingSystem } from '../../../../50-systems/RoutingSystem/0-RoutingSystem';
interface IImportModalComponentProps {
    materialArtVersioningSystem: MaterialArtVersioningSystem;
    routingSystem: RoutingSystem;
}
interface IImportModalComponentState {
    ref: React.RefObject<HTMLInputElement>;
    valid: boolean;
}
export declare class ImportModalComponent extends React.Component<
    IImportModalComponentProps,
    IImportModalComponentState
> {
    state: IImportModalComponentState;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export {};
