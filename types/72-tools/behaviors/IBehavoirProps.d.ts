
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { Touch } from 'touchcontroller';
import { ISubscription } from '../../40-utils/ISubscription';
import { ISystems } from '../../50-systems/00-SystemsContainer/ISystems';
/**
 * @collboard SDK
 */
export interface IBehavoirProps {
    systems: ISystems;
    registerAdditionalSubscription: (subscription: ISubscription) => void;
    touch: Touch;
}

                  