// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import * as React from 'react';
import { IArtVersioningSystem } from '../../50-systems/ArtVersionSystem/IArtVersionSystem';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { ArtSerializer } from '../../CollboardApp';
interface IArtDetailProps {
    art: AbstractArt;
    materialArtVersioningSystem: IArtVersioningSystem;
    artSerializer: ArtSerializer;
}
interface IArtDetailState {
    open: boolean;
}
export declare class ArtDetail extends React.Component<IArtDetailProps, IArtDetailState> {
    state: IArtDetailState;
    clickHandler(): void;
    remove(): void;
    render(): JSX.Element;
}
export {};
