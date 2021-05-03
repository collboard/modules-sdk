
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { AbstractMesh, Scene } from 'babylonjs';
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

                  