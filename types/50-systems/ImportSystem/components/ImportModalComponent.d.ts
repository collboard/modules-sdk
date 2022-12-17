// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { MaterialArtVersioningSystem } from './../../ArtVersionSystem/0-MaterialArtVersioningSystem';
import { RoutingSystem } from './../../RoutingSystem/0-RoutingSystem';
/**
 * @deprecated in favour of @collboard/internal/add-icon
 */
interface IImportModalComponentProps {
    materialArtVersioningSystem: MaterialArtVersioningSystem;
    routingSystem: RoutingSystem;
}
/**
 * @deprecated in favour of @collboard/internal/add-icon
 */
interface IImportModalComponentState {
    ref: React.RefObject<HTMLInputElement>;
    valid: boolean;
}
/**
 * @deprecated in favour of @collboard/internal/add-icon
 */
export declare class ImportModalComponent extends React.Component<
    IImportModalComponentProps,
    IImportModalComponentState
> {
    state: IImportModalComponentState;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export {};
/**
 * TODO: [🏛️] Convert Class components to Functional (with hooks).
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
