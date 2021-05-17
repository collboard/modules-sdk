// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Touch } from 'touchcontroller';
import { ISubscription } from '../../40-utils/ISubscription';
import { ISystems } from '../../50-systems/00-SystemsContainer/ISystems';
/**
 * Behaviors are parts of functionality of tools, which can be shared
 * among multiple tools. They can be called at any point during the
 * process of `TouchController` subscription
 *
 * Calling a certain behavior can be terminal and it is marked by the
 * return value. If the function returns `true`, it should be considered
 * terminal, because it "did it's job" and we should prevent any other
 * tool functionality from happening.
 *
 * @example
 * let module = {
 *     setup: (systems) => {
 *         return Registration.fromSubscription((registerAdditionalSubscription) =>
 *             systems.touchController.touches.subscribe((touch) => {
 *                 // do something else
 *                 let props: IBehavoirProps = { systems, registerAdditionalSubscription, touch };
 *                 if (selectionToolBehavior(props)) return;
 *                 if (someOtherBehavior(props)) return;
 *             }),
 *         );
 *     },
 * }
 *
 * @collboard-modules-sdk
 */
export interface IBehavoirProps {
    systems: ISystems;
    registerAdditionalSubscription: (subscription: ISubscription) => void;
    touch: Touch;
}
