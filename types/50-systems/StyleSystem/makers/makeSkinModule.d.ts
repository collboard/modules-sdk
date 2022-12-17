// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IModuleDefinition } from '../../ModuleStore/interfaces/IModule';
import { IModuleManifest } from '../../ModuleStore/interfaces/IModuleManifest/IModuleManifest';
import { ISkin } from '../ISkin';
/**
 * makeSkinModule will make skin confuiguration module
 *
 * Note: If requirePermissions not set then will this maker set them to empty array
 * Note: Module still needs to be declared
 * @collboard-modules-sdk
 */
export declare function makeSkinModule(protoModule: { manifest?: IModuleManifest; skin: ISkin }): IModuleDefinition;
