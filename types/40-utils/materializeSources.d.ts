// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_url } from './typeAliases';
/**
 * Go through all the sources and replace them with inlined downloaded version
 * For example:
 *    From: <img src="https://collboard.fra1.cdn.digitaloceanspaces.com/assets/21.0.3/languages/cs.svg" />
 *    To: <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjAwIj4KCTxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2Q3MTQxYSIvPgoJPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmZmIi8+Cgk8cGF0aCBkPSJNIDUwMCwzMDAgMCwwIHYgNjAwIHoiIGZpbGw9IiMxMTQ1N2UiLz4KPC9zdmc+" />
 *
 * @param html HTML string in which to search for sources.
 */
export declare function materializeSources(html: string, proxyUrl?: URL | string_url): Promise<string>;
/**
 * TODO: Maybe materialize <link rel="stylesheet" href=" and <script src=" more efficiently into <style> and <script> tags
 * Note: [♍] Not using ObjectUrl because it causes image tainting
 *       NOT-TODO: [LEAK] Destroy created ObjectUrls
 * TODO: Exclude already inlined images
 * TODO: What if there are more images with same src
 */
