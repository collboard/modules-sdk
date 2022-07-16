// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IBehavoirProps } from '../IBehavoirProps';
/**
 * Behavior of the selection tool
 *
 * @param useBehaviors Specifies, which parts of the selection tool behavoir
 * should be used. Defaults to `true` on all.
 * - `scaling` (Scaling objects)
 * - `dragging` (Moving objects)
 * - `selectionBox` (Creating selection box)
 * - `rotating` (Rotating objects) - **not yet implemented**
 *
 * @see IBehavoirProps
 *
 * @collboard-modules-sdk
 */
export declare function selectionToolBehavior(
    behaviorProps: IBehavoirProps,
    useBehaviors?: {
        scaling?: boolean;
        dragging?: boolean;
        rotating?: boolean;
        selectionBox?: boolean;
    },
): Promise<boolean>;
/**
 * TODO: [🎂] Probably remove systems from IBehavoirProps and use useSystems (or similar mechanism) instead
 */
