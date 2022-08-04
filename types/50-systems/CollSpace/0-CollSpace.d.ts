// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData, Vector } from 'xyzt';
import { AbstractPlacedArt } from '../../71-arts/25-AbstractPlacedArt';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
/**
 * CollSpace manages 3D objects rendered by WebGL (BABYLON JS) and provides all the tooling around the 3D scene, positioning, textures, materials, etc.
 *
 * @collboard-system
 */
export declare class CollSpace extends AbstractSystem {
    protected init(): Promise<void>;
    pickPoint(point: IVectorData): Promise<{
        point: Vector;
        normal: Vector;
    }>;
    pickArt(point: IVectorData): AbstractPlacedArt | null;
}
