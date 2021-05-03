
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { AbstractMesh, Scene } from 'babylonjs';
import { IVector } from 'xyzt';
import { Abstract3dBoxArt } from '../../../50-systems/CollSpace/27-Abstract3dBoxArt';
import { SolidName } from './SolidName';
export declare class SolidArt extends Abstract3dBoxArt {
    solidName: SolidName;
    color: string;
    constructor(solidName: SolidName, color: string, shift: IVector, _size: IVector);
    get acceptedAttributes(): string[];
    renderBox(scene: Scene): AbstractMesh;
}

                  