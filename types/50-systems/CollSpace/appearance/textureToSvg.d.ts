// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { ITexture } from './ITexture';
interface ITextureToSvgResult {
    /**
     * Identification of stroke/fill which can be used in the SVG image
     * - It can be just in-place color, for example `rgb(0,158,221)`
     * - It can be reference, for example `url(#c53dd063);`
     */
    textureId: string;
    /**
     * If textureId is reference, this is the source of the referenced definition
     */
    textureDefinition?: JSX.Element;
}
/**
 * Converts texture to SVG props
 *
 * @collboard-modules-sdk
 */
export declare function textureToSvg(texture: ITexture): ITextureToSvgResult;
export {};
/**
 * TODO: Test
 * TODO: Equivalent function for Html> textureToHtml
 * TODO: Equivalent function for Babylon> textureToBabylon
 * TODO: Maybe id: string should have some semantic like id: string_svg_definition
 */
