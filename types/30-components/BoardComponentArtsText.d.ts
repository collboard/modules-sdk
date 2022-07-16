// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { BehaviorSubject } from 'rxjs';
import { Transform } from 'xyzt';
import { AppState } from '../50-systems/AppState/0-AppState';
import { MaterialArtVersioningSystem } from '../50-systems/ArtVersionSystem/0-MaterialArtVersioningSystem';
import { ToolbarSystem } from '../50-systems/ToolbarSystem/0-ToolbarSystem';
interface IBoardComponentArtsTextProps {
    transform: BehaviorSubject<Transform>;
    appState: AppState;
    toolbarSystem: ToolbarSystem;
    materialArtVersioningSystem: MaterialArtVersioningSystem;
}
/**
 * @deprecated
 */
export declare function BoardComponentArtsText(props: IBoardComponentArtsTextProps): JSX.Element;
export {};
/**
 * TODO: 💩 This should be parts of a TextArt / TextTool module.
 * TODO: ProbbablyMaybe? Include also Virtual ArtVersioningSystem.
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 * TODO: [🏊‍♂️] Better naming and distinction of Collboard-specific components vs utils components
 */
