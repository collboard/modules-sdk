// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ITransformData, IVectorData, Transform } from 'xyzt';
import { string_attribute } from '../40-utils/typeAliases';
import { IBoundingBoxData } from '../50-systems/ExportSystem/interfaces/IBoundingBoxData';
import { AbstractArt } from './20-AbstractArt';
/**
 * Constant, which should be used to determine, whether a point is near the art
 *
 * @collboard-modules-sdk
 * @deprecated This should be exported from some system or util to be user-settable
 */
export declare const NEAR_DISTANCE = 20;
/**
 * AbstractPlacedArt is an abstract class which all arts with position and size
 * extend.
 *
 * @collboard-modules-sdk
 */
export declare abstract class AbstractPlacedArt extends AbstractArt implements IBoundingBoxData {
    /**
     * Get the transform which is created from a deprecated shift
     */
    get transform(): Transform;
    /**
     * Set the transform which is converted and saved as a deprecated shift
     */
    set transform(transformData: ITransformData);
    /**
     * Translation vector of art
     *
     * @deprecated use transform property instead
     */
    shift: IVectorData;
    /**
     * Marks, whether art is locked
     *
     * TODO: ✨ Maybe add is prefix
     */
    locked: boolean;
    /**
     * Getter with list of attributes particular art supports
     *
     * Value is used to display a floating menu above selection
     *
     * @deprecated Make it using IMaterial
     *
     * @example
     * public get acceptedAttributes() {
     *     return ["color", "size"];
     * }
     */
    abstract get acceptedAttributes(): Array<string_attribute>;
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
     *
     * @deprecated use transform property instead
     */
    rotation: any;
    /**
     * Position of top left corner of art (absolute including `shift`)
     *
     * Value is used mostly when making selection
     *
     * @deprecated Make it using BoundingBox
     * @abstract
     */
    abstract get topLeft(): IVectorData;
    /**
     * Position of bottom right corner of art (absolute including `shift`)
     *
     * Value is used mostly when making selection
     *
     * @deprecated Make it using BoundingBox
     * @abstract
     */
    abstract get bottomRight(): IVectorData;
    /**
     * Position of top right corner of art (absolute including `shift`)
     *
     * Value is used mostly when making selection
     *
     * @deprecated Make it using BoundingBox
     */
    get topRight(): IVectorData;
    /**
     * Position of bottom left corner of art (absolute including `shift`)
     *
     * Value is used mostly when making selection
     *
     * @deprecated Make it using BoundingBox
     */
    get bottomLeft(): IVectorData;
    /**
     * Function determining, whether a point is near the art
     *
     * Default implementation uses square bounding box
     *
     * @deprecated Make it using BoundingBox - just only provide BoundingBoxand the calling will look like art.boundingBox.isNear(...)
     */
    isNear(pointToTest: IVectorData): boolean;
    /**
     * Move art to certain vector (= absolute)
     *
     * @deprecated use transform property instead
     */
    setShift(shift: IVectorData): this;
    /**
     * Move art to by vector (= relative)
     *
     * @deprecated use transform property instead
     */
    move(shift: IVectorData): this;
}
/**
 * TODO: [🎟️] topLeft, bottomRight, topRight and bottomLeft should be encapsulated in boundingBox property
 * TODO: [🍎]  acceptedAttributes should reflect IMaterial and IShape
 * TODO: [🎚️] Maybe get rit of AbstractArts and make makers for arts which returns IArts
 */
