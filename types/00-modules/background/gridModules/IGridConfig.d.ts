// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData } from 'xyzt';
import { string_url } from '../../../40-utils/typeAliases';
import { IModuleManifestTranslation } from '../../../50-systems/ModuleStore/interfaces/IModuleManifest';
export interface IGridConfig {
    name: string;
    title: IModuleManifestTranslation;
    src: string_url;
    size: IVectorData;
    opacity: number;
}
