// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVectorData, Vector } from 'xyzt';
import { string_attribute } from '../40-utils/typeAliases';
import { ISystemsExtended } from '../50-systems/00-SystemsContainer/ISystems';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * Abstract2dArt implements some of the functionality of `Abstract2dArt` to
 * make implementation of square objects simpler.
 *
 * @deprecated use hook useMeasure or Measure component instead @see TextArt
 * @collboard-modules-sdk
 */
export declare abstract class Abstract2dBoxArt extends Abstract2dArt {
    private privateSize;
    private __scale;
    /**
     * @param size null means it will be automatically measured and set
     * @param scale rescale after measuring; it will be used only if size is null
     */
    constructor(
        privateSize?: /* <- [🍈] name privateSize is confusing, use something instead like size (=privateSize) vs. originalSize */ IVectorData | null,
        __scale?: number,
    );
    /**
     * Readonly property containing information about object's original size
     */
    originalSize: Vector;
    get size(): IVectorData;
    set size(size: IVectorData);
    get topLeft(): IVectorData;
    get bottomRight(): Vector;
    /**
     * Was the art already measured?
     */
    get measured(): boolean;
    get acceptedAttributes(): Array<string_attribute>;
    render(isSelected: boolean, systems: ISystemsExtended): JSX.Element;
    /**
     * Measure the object and set `privateSize` and `originalSize`
     */
    protected measure(element: HTMLElement | null, update?: () => void): Promise<void>;
    /**
     * Function called when object needs to be rendered on screen
     * This is an abstract wrapper over Abstract2dArt's `render`
     *
     * @param systemsContainer contains all systems, which can be used
     * within rendering
     *
     * *Note: This can be called many times a second when user is scrolling
     * or not at all when art is out of screen*
     */
    protected abstract renderBox(systems: ISystemsExtended): JSX.Element;
}
/**
 * TODO: [🍎]  Use IShape instead of weight, points,...
 * TODO: [🎚️] Maybe get rit of AbstractArts and make makers for arts which returns IArts
 */
