// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IPersonProfile } from '../../../../../40-utils/typeAliases';
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
export declare function parseModuleAuthors({
    author: authorRaw,
    contributors: contributorsRaw,
}: Pick<IModuleManifest, 'author' | 'contributors'>): IPersonProfile[];
