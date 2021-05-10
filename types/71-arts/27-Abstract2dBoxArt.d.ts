
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { string_attribute } from '../40-utils/typeAliases';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * TODO: description
 * TODO: Inspire by Abstract3dBoxArt (for example in size fluent API)
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 *
 * @collboard-modules-sdk
 */
export declare abstract class Abstract2dBoxArt extends Abstract2dArt {
    private privateSize;
    /**
     *
     * @param size null means it will be automatically measured and set
     */
    constructor(privateSize?: IVector | null);
    originalSize: Vector;
    get size(): IVector;
    set size(size: IVector);
    get topLeftCorner(): import("xyzt").IVectorObject;
    get bottomRightCorner(): Vector;
    get measured(): boolean;
    get acceptedAttributes(): string_attribute[];
    render(selected: boolean): JSX.Element;
    measure(element: HTMLElement | null): Promise<void>;
    abstract renderBox(): JSX.Element;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */

                  