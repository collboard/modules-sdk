// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { AbstractMesh, Scene } from 'babylonjs';
import { IVector, Vector } from 'xyzt';
import { string_attribute } from '../../40-utils/typeAliases';
import { Abstract3dArt, IRenderCache } from './Abstract3dArt';
/**
 * TODO: description
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 */
export declare abstract class Abstract3dBoxArt extends Abstract3dArt<IRenderCache> {
    size: IVector;
    rotation: IVector;
    setSize(size: IVector): this;
    get topLeftCorner(): import('xyzt').IVectorObject;
    get bottomRightCorner(): Vector;
    get acceptedAttributes(): string_attribute[];
    render(selected: boolean, scene: Scene, renderCache?: IRenderCache): IRenderCache;
    abstract renderBox(scene: Scene): AbstractMesh;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
