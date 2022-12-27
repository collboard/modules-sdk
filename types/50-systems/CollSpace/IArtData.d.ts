// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Transform } from 'xyzt';
import { IAppearance } from './appearance/IAppearance';
import { IShape } from './IShape';
/**
 * @@@
 *
 * - **IArt** @@@
 * - **IArtData** @@@
 *
 *
 * @collboard-modules-sdk
 */
export interface IArtData<TShape extends IShape = IShape, TAppearance extends IAppearance = IAppearance> {
    /**
     * Transform of the art relative to origin of the board
     * It means position, rotation and scale of the art
     */
    transform: Transform;
    /**
     * How the art looks inside without the colors and textures
     * This will be different for each art Class
     */
    shape: TShape;
    /**
     * What colors and textures are applied to the art
     */
    appearance: TAppearance;
}
/**
 * TODO: Maybe split IArtData into reusable layers:
 *       IArtData extends IArtAppearanceData
 *       IArtAppearanceData extends IArtShapeData
 *
 * TODO: ACRY order for shape, appearance, transform
 */
