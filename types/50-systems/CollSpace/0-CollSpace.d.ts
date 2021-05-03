
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IVector, Vector } from 'xyzt';
import { AbstractPlacedArt } from '../../71-arts/25-AbstractPlacedArt';
import { AbstractSystem } from '../AbstractSystem';
/**
 * CollSpace manages 3D objects rendered by WebGL (BABYLON JS) and provides all the tooling around the 3D scene, positioning, textures, materials, etc.
 */
export declare class CollSpace extends AbstractSystem {
    private renderCache;
    protected init(): Promise<void>;
    private _scene;
    private get scene();
    private _sceneSync;
    private get sceneSync();
    private shadowGenerator;
    private createScene;
    pickPoint(point: IVector): {
        point: Vector;
        normal: Vector;
    };
    pickArt(point: IVector): AbstractPlacedArt | null;
}
/**
 * TODO: General 3D TODOs
 *
 *  TODO: Texture and material system and connection to assets
 *  TODO:
 *  TODO:
 *
 */

                  