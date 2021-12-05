// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

/// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { string_attribute } from '../40-utils/typeAliases';
import { ISystemsExtended } from '../50-systems/00-SystemsContainer/ISystems';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * Abstract2dArt implements some of the functionality of `Abstract2dArt` to
 * make implementation of square objects simpler.
 *
 * @collboard-modules-sdk
 */
export declare abstract class Abstract2dBoxArt extends Abstract2dArt {
    private privateSize;
    /**
     * @param size null means it will be automatically measured and set
     */
    constructor(privateSize?: IVector | null);
    /**
     * Readonly property containing information about object's original size
     */
    originalSize: Vector;
    get size(): IVector;
    set size(size: IVector);
    get topLeftCorner(): import('xyzt').IVectorObject;
    get bottomRightCorner(): Vector;
    /**
     * Was the art already measured?
     */
    get measured(): boolean;
    get acceptedAttributes(): string_attribute[];
    render(/* TODO: ✨ Add is prefix */ selected: boolean, systems: ISystemsExtended): JSX.Element;
    /**
     * Measure the object and set `privateSize` and `originalSize`
     */
    measure(element: HTMLElement | null): Promise<void>;
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
    abstract renderBox(systems: ISystemsExtended): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
