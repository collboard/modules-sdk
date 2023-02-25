// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { BehaviorSubject, Observable } from 'rxjs';
import { Transform } from 'xyzt';
import { AbstractBackgroundArt } from '../71-arts/26-AbstractBackgroundArt';
interface IBoardBackgroundsProps {
    backgroundArts: Observable<Array<AbstractBackgroundArt>>;
    transform: BehaviorSubject<Transform>;
}
export declare function BoardBackgroundsComponent({ backgroundArts, transform }: IBoardBackgroundsProps): JSX.Element;
export { };
/**
 * TODO: [🏊‍♀️] Better naming for BoardBackgroundsComponent
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
