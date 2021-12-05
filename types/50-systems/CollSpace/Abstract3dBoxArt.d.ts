// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Scene } from '@babylonjs/core/scene';
import { IVector, Vector } from 'xyzt';
import { string_attribute } from '../../40-utils/typeAliases';
import { Abstract3dArt, IRenderCache } from '../../50-systems/CollSpace/Abstract3dArt';
/**
 * TODO: description
 * TODO: Is better that the file is here or should it be in 71-arts?
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 */
export declare abstract class Abstract3dBoxArt extends Abstract3dArt<IRenderCache> {
    private _size;
    constructor(_size?: IVector);
    get size(): IVector;
    set size(size: IVector);
    get topLeftCorner(): import('xyzt').IVectorObject;
    get bottomRightCorner(): Vector;
    get acceptedAttributes(): string_attribute[];
    render(/* TODO: ✨ Add is prefix */ selected: boolean, scene: Scene, renderCache?: IRenderCache): IRenderCache;
    abstract renderBox(scene: Scene): AbstractMesh;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
