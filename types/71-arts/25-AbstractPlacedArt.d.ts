
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IVector } from 'xyzt';
import { IBoundingBox } from '../50-systems/ExportImportSystem/interfaces/IBoundingBox';
import { AbstractArt } from './20-AbstractArt';
export declare const IS_NEAR_DISTANCE = 20;
/**
 * TODO: description
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 *
 * @collboard-modules-sdk
 */
export declare abstract class AbstractPlacedArt extends AbstractArt implements IBoundingBox {
    shift: IVector;
    locked: boolean;
    /**
     * TODO: Implement also on 3D arts
     */
    opacity?: number;
    rotation: any;
    abstract get topLeftCorner(): IVector;
    abstract get bottomRightCorner(): IVector;
    get topRightCorner(): IVector;
    get bottomLeftCorner(): IVector;
    isNear(point2: IVector): boolean;
    setShift(shift: IVector): this;
    move(shift: IVector): this;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */

                  