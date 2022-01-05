// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IPersonProfile } from '../../../../../40-utils/typeAliases';
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
export declare function parseModuleAuthors({
    author: authorRaw,
    contributors: contributorsRaw,
}: Pick<IModuleManifest, 'author' | 'contributors'>): IPersonProfile[];
