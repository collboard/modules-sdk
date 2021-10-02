// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IVector } from 'xyzt';
import { string_attribute } from '../40-utils/typeAliases';
import { IBoundingBox } from '../50-systems/ExportImportSystem/interfaces/IBoundingBox';
import { AbstractArt } from './20-AbstractArt';
/**
 * Constant, which should be used to determine, whether a point is near the art
 *
 * @see AbstractPlacedArt.isNear
 *
 * @collboard-modules-sdk
 */
export declare const IS_NEAR_DISTANCE = 20;
/**
 * AbstractPlacedArt is an abstract class which all arts with position and size
 * extend.
 *
 * @collboard-modules-sdk
 */
export declare abstract class AbstractPlacedArt extends AbstractArt implements IBoundingBox {
    /**
     * Translation vector of art
     */
    shift: IVector;
    /**
     * Marks, whether art is locked
     */
    locked: boolean;
    /**
     * Getter with list of attributes particular art supports
     *
     * Value is used to display a floating menu above selection
     *
     * @example
     * get acceptedAttributes() {
     *     return ["color", "size"];
     * }
     */
    abstract get acceptedAttributes(): string_attribute[];
    /**
     * Opacity of an art
     *
     * Value is automatically used by ArtShell when rendering
     *
     * *Note: only works on 2D arts*
     */
    opacity?: number;
    /**
     * Rotation of an art
     *
     * Value is automatically used by ArtShell when rendering
     *
     * *Note: type needs to be overridden when extending*
     */
    rotation: any;
    /**
     * Position of top left corner of art (absolute including `shift`)
     *
     * Value is used mostly when making selection
     *
     * @abstract
     */
    abstract get topLeftCorner(): IVector;
    /**
     * Position of bottom right corner of art (absolute including `shift`)
     *
     * Value is used mostly when making selection
     *
     * @abstract
     */
    abstract get bottomRightCorner(): IVector;
    /**
     * Position of top right corner of art (absolute including `shift`)
     *
     * Value is used mostly when making selection
     */
    get topRightCorner(): IVector;
    /**
     * Position of bottom left corner of art (absolute including `shift`)
     *
     * Value is used mostly when making selection
     */
    get bottomLeftCorner(): IVector;
    /**
     * Function determining, whether a point is near the art
     *
     * Default implementation uses square bounding box
     */
    isNear(point2: IVector): boolean;
    /**
     * Move art to certain vector (= absolute)
     */
    setShift(shift: IVector): this;
    /**
     * Move art to by vector (= relative)
     */
    move(shift: IVector): this;
}
