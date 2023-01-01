// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { ITransformData, IVectorData } from 'xyzt';
import { number_positive, string_color, string_module_name } from '../../40-utils/typeAliases';
import { IAppearance } from '../../50-systems/CollSpace/appearance/IAppearance';
import { IArt } from '../../50-systems/CollSpace/IArt';
import { Abstract2dArt } from '../26-Abstract2dArt';
import { IPointShape } from './IPointShape';
/**
 * Just a point/flag/marker or whatever pointy on the board
 *
 * @collboard-modules-sdk
 */
export declare class PointArt extends Abstract2dArt implements IArt<IPointShape> {
    shape: IPointShape;
    appearance: IAppearance;
    static serializeName: string;
    static manifest: {
        name: string;
        deprecatedNames: string;
    };
    constructor(shape: IPointShape, appearance: IAppearance, transform: ITransformData);
    get moduleName(): string_module_name;
    get topLeft(): IVectorData;
    get bottomRight(): IVectorData;
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
    render(isSelected: boolean): JSX.Element;
}
/**
 * [🧗‍♀️] CornerstoneArt extends PointArt
 * TODO: Also other designs of the point like ❌, ⭕, 🚩,...
 * TODO: [🌫️]
 * TODO: [🐁]
 */
