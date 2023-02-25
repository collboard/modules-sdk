// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { BehaviorSubject, Observable } from 'rxjs';
import { Transform } from 'xyzt';
import { AbstractPlacedArt } from '../71-arts/25-AbstractPlacedArt';
interface IBoardComponentArtsProps {
    artsPlaced: Observable<Array<AbstractPlacedArt>>;
    /**
     * Transform of the user`s view on the board
     */
    transform: BehaviorSubject<Transform>;
}
export declare function BoardComponentArts(props: IBoardComponentArtsProps): JSX.Element;
export { };
/**
 * TODO: [📕] Unite ArtShell
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 * TODO: [🏊‍♂️] Better naming and distinction of Collboard-specific components vs utils components
 */
