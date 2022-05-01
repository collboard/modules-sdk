// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { AppState } from '../../50-systems/AppState/0-AppState';
import { IArtVersioningSystem } from '../../50-systems/ArtVersionSystem/IArtVersionSystem';
import { ArtSerializer } from '../../CollboardApp';
interface IArtsListProps {
    appState: AppState;
    materialArtVersioningSystem: IArtVersioningSystem;
    artSerializer: ArtSerializer;
}
export declare function ArtsList(props: IArtsListProps): JSX.Element;
export {};
