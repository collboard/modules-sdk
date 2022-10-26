// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IFullPhongMaterial, IMaterial } from './IMaterial';
/**
 * Converts material in any form to the phong one
 *
 * @param material in any form (just texture, phong)
 * @returns IFullPhongMaterial
 *
 * @collboard-modules-sdk
 */
export declare function getFullPhongMaterial(material: IMaterial): IFullPhongMaterial;
/**
 * TODO: [🍚] Ask throw syntax:
 *       1) if(){ return }else if(){ return } throw
 *       2) if(){ return }else if(){ return }else{ throw }
 *       3) if(){ return } if(){ return } throw
 *
 */
