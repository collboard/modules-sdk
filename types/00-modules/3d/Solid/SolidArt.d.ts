// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Scene } from '@babylonjs/core/scene';
import { IVectorData } from 'xyzt';
import { Abstract3dBoxArt } from '../../../50-systems/CollSpace/27-Abstract3dBoxArt';
import { SolidName } from './SolidName';
export declare class SolidArt extends Abstract3dBoxArt {
    solidName: SolidName;
    color: string;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    constructor(solidName: SolidName, color: string, shift: IVectorData, _size: IVectorData);
    get acceptedAttributes(): string[];
    renderBox(scene: Scene): AbstractMesh;
}
