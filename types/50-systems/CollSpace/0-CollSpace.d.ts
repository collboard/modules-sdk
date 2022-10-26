// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BoundingBox, IVectorData, Vector } from 'xyzt';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
/**
 * CollSpace manages 3D objects rendered by WebGL (BABYLON JS) and provides all the tooling around the 3D scene, positioning, textures, materials, etc.
 *
 * @collboard-system
 */
export declare class CollSpace extends AbstractSystem {
    private appState;
    protected init(): Promise<void>;
    /**
     * Border of the user screen
     */
    get screenBorder(): BoundingBox;
    /**
     * Pick point on the board based on point on users screen
     *
     * @param pointOnScreen [0,0] means top-left corner of the window
     * @return point on the board with normal vector (if there is 3D shape)
     */
    pickPoint(pointOnScreen: IVectorData): {
        point: Vector;
        normal: Vector;
    };
    /**
     * Testing code to showcase screenBorder property
     */
    private testScreenBorder;
    /**
     * Testing code to showcase pickPoint method
     */
    private testPickPoint;
}
/**
 * TODO: [🍤] This should be splitted/renamed into ArtSystem, SpaceSystem, RenderingSystem and MaterialSystem
 */
