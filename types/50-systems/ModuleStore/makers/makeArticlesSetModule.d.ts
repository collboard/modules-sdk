// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_translate_language, string_uri_part, string_url } from '../../../40-utils/typeAliases';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
/**
 * TODO: How to do article translations and flags in window top
 * TODO: Možná by tady nahoře mohlo být menu k dalším stránkám. ArticleSet?
 * TODO: Live reloaded content (like stats)
 * TODO: Scoped css
 * TODO: Namings URL vs SRC
 *
 * Note: There is in git history makeArticleModule but we have removed it. If it will be needed, we can bring it back.
 *
 * @collboard-modules-sdk
 */
export declare function makeArticlesSetModule(protoModule: {
    manifest: IModuleManifest;
    defaultArticle?: string_uri_part;
    articles: Record<string_uri_part, Partial<Record<string_translate_language, string_url>>>;
}): IModuleDefinition;
