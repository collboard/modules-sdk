// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { ITransformData, IVectorData, Vector } from 'xyzt';
import { number_positive, string_color, string_module_name } from '../../40-utils/typeAliases';
import { IAppearance } from '../../50-systems/CollSpace/appearance/IAppearance';
import { IArt } from '../../50-systems/CollSpace/IArt';
import { Abstract2dArt } from '../26-Abstract2dArt';
import { IPolygonShape } from './IPolygonShape';
/**
 * Universal polygon art with N points
 * Polygon is always closed - there is always last edge from last point back to the first point
 *
 * @collboard-modules-sdk
 */
export declare class PolygonArt extends Abstract2dArt implements IArt<IPolygonShape> {
    shape: IPolygonShape;
    appearance: IAppearance;
    static serializeName: string;
    static manifest: {
        name: string;
        deprecatedNames: string;
    };
    private minX;
    private maxX;
    private minY;
    private maxY;
    constructor(shape: IPolygonShape, appearance: IAppearance, transform: ITransformData);
    get moduleName(): string_module_name;
    private get path();
    get topLeft(): Vector;
    get bottomRight(): Vector;
    get size(): IVectorData;
    set size(newSize: IVectorData);
    /**
     * Get the color
     * @deprecated [🐀] this is only way how to support old attribute system with the new IArt
     */
    get color(): string_color;
    /**
     * Set the color
     * @deprecated [🐀] this is only way how to support old attribute system with the new IArt
     */
    set color(color: string_color);
    /**
     * Get the weight
     * @deprecated [🐀] this is only way how to support old attribute system with the new IArt
     */
    get weight(): number_positive;
    /**
     * Set the weight
     * @deprecated [🐀] this is only way how to support old attribute system with the new IArt
     */
    set weight(weight: number_positive);
    isNear(pointToTest: IVectorData): boolean;
    get acceptedAttributes(): string[];
    /**
     * @deprecated [🍒] remove this method
     */
    private calculateBoundingBox;
    render(isSelected: boolean): JSX.Element;
}
/**
 * TODO: [🐁] What is the best order of constructor attributes> public shape: IPolygonShape, public appearance: IAppearance,transform: ITransformData
 *       Make this same for every IArt
 * TODO: [🎢] Implement spotSize - when detecting size of the SVG take bigger of spotSize and edgeSize
 * TODO: [1] What about line as a PolygonArt with 2 points?
 * TODO: [2] What about dot/point as a PolygonArt with 1 point?
 *
 * TODO: Instead of x/y pairs use Vector
 * TODO: [✏️] Fix> react-dom.development.js:630 Error: <svg> attribute width: Expected length, "NaN".
 * TODO: Probbably (maybe in html/css values MUST be whole integers): ACTRY To be infinitelly zoomable avoid using Math.ceil, Math.floor, Math.round,...
 *
 *
 * TODO: Better abstraction 2 compeating approaches
 *       > Intermediate object
 *          - Render can create some intermediate objects which are between data and rendering
 *          - Art -> "intermediate object" -> JSX.Element
 *          - Art -> "intermediate object" -> 3D Mesh
 *          + Figure out where to put in the material
 *          + Some tag for new art system
 *       > Every Abstract2DArt became PolygonArt
 *          + So this "intermediate object" will be just the PolygonArt
 *
 *
 *        - How about Text?
 *        - Go through all other Arts
 *        - ArtShell
 *        - Exports?
 *        - Material
 *        - Serialization
 *        - Migrations
 *        - What new system to create
 *        + Some tag for new art approaches(s)
 *
 *
 * TODO: Can there be some way how to extend PolygonArt (as "intermediate object") to 3D
 * TODO: [🚉] There should be some rounding optimization for svg numbers (for example path)
 *       From: d="M60.00000000000006 70.4999999999999 L60.00000000000006 70.4999999999999...
 *       To:   d="M60 70.5 L60 70.5...
 *
 * TODO: [🌫️] Should be shape, appearance and transform readonly properties
 *      > public shape: IPointShape, public appearance: IAppearance
 *      > public readonly shape: IPolygonShape, public readonly appearance: IAppearance
 * TODO: [👨‍🦰] minX, maxX, minY, maxY should not be serialized - make it through getters, private for serializer or use new system of shape+appearance+transform
 *
 */
