// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

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
 */
export declare function selectionToolBehavior(
    behaviorProps: IBehavoirProps,
    useBehaviors?: {
        scaling?: boolean;
        dragging?: boolean;
        rotating?: boolean;
        selectionBox?: boolean;
    },
): boolean;
