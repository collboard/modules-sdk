
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import * as React from 'react';
import { IArtVersioningSystem } from '../../50-systems/ArtVersionSystem/IArtVersionSystem';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { ArtSerializer } from '../../CollBoardApp';
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

                  