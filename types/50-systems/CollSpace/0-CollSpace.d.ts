// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IVector, Vector } from 'xyzt';
import { AbstractPlacedArt } from '../../71-arts/25-AbstractPlacedArt';
import { AbstractSystem } from '../AbstractSystem';
/**
 * CollSpace manages 3D objects rendered by WebGL (BABYLON JS) and provides all the tooling around the 3D scene, positioning, textures, materials, etc.
 *
 * @collboard-system
 */
export declare class CollSpace extends AbstractSystem {
    private renderCache;
    private appState;
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
