// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Color } from '../../../40-utils/color/Color';
import { ITexture } from './ITexture';
/**
 * Converts texture to color
 * If the texture is not a simple color, returns some transparent color instead
 *
 * Note: There are two similar functions:
 * - **textureToColor** Propperly extracts color from image textures but returns a promise
 * - **textureToColorSync** Returns provisional color when image texture is given but works synchronously
 *
 * @param texture
 * @returns Color
 *
 * @collboard-modules-sdk
 */
export declare function textureToColorSync(texture: ITexture): Color;
