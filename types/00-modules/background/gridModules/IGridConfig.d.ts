// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IVector } from 'xyzt';
import { string_url } from '../../../40-utils/typeAliases';
import { IModuleManifestTranslation } from '../../../50-systems/ModuleStore/interfaces/IModuleManifest';
export interface IGridConfig {
    name: string;
    title: IModuleManifestTranslation;
    src: string_url;
    size: IVector;
    opacity: number;
}
