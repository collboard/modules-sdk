// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { RequireAtLeastOne } from 'type-fest';
import { ITexture } from './ITexture';
/**
 * Material describes one material of the art or part of the art
 * It can be one of the following:
 * - **ITexture** when you want to use just an emissive texture without struggle with the lightning, shadows, etc.
 * - **IPhongMaterial** when you want to specify full phong lighting model
 *
 * @collboard-modules-sdk
 */
export type IMaterial = ITexture | IPhongMaterial;
/**
 * Material with specified at least parts of phong lighting model
 *
 * @collboard-modules-sdk
 */
export type IPhongMaterial = RequireAtLeastOne<IFullPhongMaterial>;
/**
 * Full phong lighting model
 * NOT IMPLEMENTED YET just holding place for future use
 *
 * @collboard-modules-sdk
 */
export interface IFullPhongMaterial {
    emissiveTexture: ITexture;
    diffuseTexture: ITexture;
    specularTexture: ITexture;
    ambientTexture: ITexture;
}
/**
 * TODO: Bump(normal) textures
 * TODO: Default/preset appearances/material/texture like transparent, from color,...
 * TODO: Anotate each IPhongMaterial properties
 * TODO: Maybe IMaterial contexts like printTexture, exportTexture, mobileTexture,...
 */
