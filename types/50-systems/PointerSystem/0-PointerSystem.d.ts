// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { AbstractSystem } from '../AbstractSystem';
/**
 * PointerSystem allows us to bind a different controller then touch or mouse. For example, it is syncing the phone with accelerometer or VR controllers.
 * TODO: This should be part of integrated TouchController
 *
 * @private
 * @collboard-system
 */
export declare class PointerSystem extends AbstractSystem {
    protected init(): Promise<void>;
}
