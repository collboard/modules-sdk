
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { string_uri_part, string_url } from '../../../40-utils/typeAliases';
import { string_tranlate_language } from '../../TranslationsSystem/0-TranslationsSystem';
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
    articles: Record<string_uri_part, Record<string_tranlate_language, string_url>>;
}): IModuleDefinition;

                  