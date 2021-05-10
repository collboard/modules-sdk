
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { IVector } from 'xyzt';
import { ISystems } from '../50-systems/00-SystemsContainer/ISystems';
import { AbstractPlacedArt } from './25-AbstractPlacedArt';
/**
 * TODO: description
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 *
 * @collboard-modules-sdk
 */
export declare abstract class Abstract2dArt extends AbstractPlacedArt {
    get size(): IVector;
    set size(size: IVector);
    rotation: number;
    abstract render(selected: boolean, systemsContainer: ISystems): JSX.Element | null;
    defaultZIndex: number;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */

                  