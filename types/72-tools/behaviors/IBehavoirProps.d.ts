// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISubscription } from 'destroyable';
import { Touch } from 'touchcontroller';
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
 *     async setup(systems){
 *         const { touchController } = await systems.request('touchController');
 *
 *         return Registration.fromSubscription((registerAdditionalSubscription) =>
 *             touchController.touches.subscribe((touch) => {
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
/**
 * TODO: [🎂] Probably remove systems from IBehavoirProps and use useSystems (or similar mechanism) instead
 */
