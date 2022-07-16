// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_url } from '../../40-utils/typeAliases';
/**
 * @deprecated in favour of MessageApi.CreateBoard
 */
export interface ICreateBoardOptions {
    /**
     * If you want to request custom uriId, provide valid debug token. [👢]
     */
    uriId?: string;
    boardname?: string;
    redirect?: boolean;
    importAsMaterialize?: string_url;
    /**
     * @deprecated [🈚] Make this better via Art
     */
    importAsLink?: string_url;
    modulesOn?: string | Array<string>;
    modulesOff?: string | Array<string>;
}
