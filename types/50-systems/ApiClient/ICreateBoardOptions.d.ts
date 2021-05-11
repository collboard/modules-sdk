// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { string_url } from '../../40-utils/typeAliases';
export interface ICreateBoardOptions {
    /**
     * If you want to request custom uriId, provide valid debug token.
     */
    uriId?: string;
    boardName?: string;
    redirect?: boolean;
    importAsMaterialize?: string_url;
    importAsLink?: string_url;
    modulesOn?: string | string[];
    modulesOff?: string | string[];
}
