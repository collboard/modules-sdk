// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Scene } from '@babylonjs/core/scene';
import { string_url } from '../../40-utils/typeAliases';
import { Abstract3dBoxArt } from '../../50-systems/CollSpace/27-Abstract3dBoxArt';
export interface IPlanetConfiguration {
    texture: string_url;
    textureEmissive?: string_url;
    textureSpecular?: string_url;
    textureNormal?: string_url;
    diameter: number;
}
export declare abstract class AbstractPlanetArt extends Abstract3dBoxArt {
    abstract getPlanetConfiguration(): IPlanetConfiguration;
    renderBox(scene: Scene): AbstractMesh;
}
