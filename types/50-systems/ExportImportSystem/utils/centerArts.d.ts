// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IVector } from 'xyzt';
import { AbstractPlacedArt } from '../../../71-arts/25-AbstractPlacedArt';
/**
 * Note: This will mutate passed arts
 * TODO: Use rotation and scale we should probbably bahave isotropically and isometrically (pass here transform instead of center)
 */
export declare function centerArts({
    arts,
    boardPosition,
}: {
    arts: AbstractPlacedArt[];
    boardPosition: IVector;
}): void;
