// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_color, string_url_image } from '../../../40-utils/typeAliases';
/**
 * Texture is texture or its equivalent like color, gradient, video, etc.
 *
 * @collboard-modules-sdk
 */
export type ITexture = IColorTexture | ITextureTexture;
/**
 * Just a simple color
 * Note: This color can be transparent
 *
 * @collboard-modules-sdk
 */
export interface IColorTexture {
    color: string_color;
}
/**
 * Texture
 * Note: Image for the texture can be transparent
 *
 * @collboard-modules-sdk
 */
export interface ITextureTexture {
    textureSrc: string_url_image;
}
/**
 * TODO: Default/preset appearances/material/texture like transparent, from color,...
 * TODO: Make multitextures:
 *     > export type ITexture = ArrayableFull<ISingleTexture>;
 *     > export type ISingleTexture = IColorTexture | ITextureTexture;
 *
 * TODO: Maybe for optimization reasons create transparent/opaque textures
 * TODO: ITextureTexture uv mapping, cover, contain,...
 *
 */
