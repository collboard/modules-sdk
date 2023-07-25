// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IBehavior } from '../0-IBehavior';
interface ISelectionToolBehaviors {
    isScaling?: boolean;
    isDragging?: boolean;
    isRotating?: boolean;
    isSelectionBox?: boolean;
}
/**
 * Creates behavior of the selection tool
 *
 * @param useBehaviors Specifies, which parts of the selection tool behavior
 * should be used. Defaults to `true` on all.
 * - `isScaling` (Scaling objects)
 * - `isDragging` (Moving objects)
 * - `isSelectionBox` (Creating selection box)
 * - `isRotating` (Rotating objects) - **not yet implemented**
 *
 * @see IBehaviorOptions
 *
 * @collboard-modules-sdk
 */
export declare function createSelectionToolBehavior(useBehaviors?: ISelectionToolBehaviors): Promise<IBehavior>;
export {};
/**
 * TODO: [🎂] Probably remove systems from IBehaviorProps and use useSystems (or similar mechanism) instead
 */
