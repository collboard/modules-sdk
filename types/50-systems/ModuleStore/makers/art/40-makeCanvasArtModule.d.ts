// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { IAppearance } from '../../../CollSpace/appearance/IAppearance';
import { IShape } from '../../../CollSpace/IShape';
import { IModuleManifest } from '../../interfaces/IModuleManifest/IModuleManifest';
import { IArtModuleDefinition } from './30-makeFunctionalArtModule';
interface ICanvasArtOptions {
    /**
     * TODO: !!! [5]
     * @@@
     */
    manifest: IModuleManifest;
    /**
     * @@@
     */
    draw(ctx: CanvasRenderingContext2D): Promisable<void>;
}
/**
 * @@@
 *
 * @param options @@@
 * @returns @@@
 *
 * @collboard-modules-sdk
 */
export declare function makeCanvasArtModule<
    TShape extends IShape = IShape,
    TAppearance extends IAppearance = IAppearance,
>(options: ICanvasArtOptions): IArtModuleDefinition<TShape, TAppearance>;
export {};
/**
 * TODO: !!! makeReactArt, makeBabylonArt, makeDomArt, makeJqueryArt
 * TODO: !!! [6] Unhardcode size and origin - but in future infinite canvas
 *       TODO: !!! Use internally global translate, rotate on canvas ctx?
 * TODO: !!! Some makers does not return ModuleDefinition but Art or multiple modules, should they be called makers
 * TODO: !!! makeCanvasArtModule vs makeCanvasModule
 * TODO: !!! Use or not to use simple prefix in maker
 * TODO: !!! Optimize re-draw
 * TODO: Do not internally use class
 * TODO: !!! Think about return type Promisable<void>
 *       - What about animated arts
 *        - What about heavy arts
 */
