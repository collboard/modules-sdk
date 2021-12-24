// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { Observable } from 'rxjs';
import { string_translate_language, string_uri_part, string_url, string_version } from '../../40-utils/typeAliases';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../AbstractSystem';
import { MaterialArtVersioningSystem } from '../ArtVersionSystem/0-MaterialArtVersioningSystem';
import { ITranslateMessage } from '../TranslationsSystem/ITranslateMessage';
import { ICreateBoardOptions } from './ICreateBoardOptions';
import { IGetMyBoardsResponse } from './interfaces/IGetMyBoards';
/**
 * ApiClient provides API calls to the remote server.
 *
 * @collboard-system
 */
export declare class ApiClient extends AbstractSystem {
    private apiUrl;
    constructor(systems: ISystemsExtended, apiUrl: string);
    private apiClientCache;
    protected init(): Promise<void>;
    getAbout(): Promise<{
        version: string;
        remoteInstanceId: string_version;
    }>;
    connectToBoard(uriId: string_uri_part): Promise<MaterialArtVersioningSystem>;
    createNewBoard(options: Omit<ICreateBoardOptions, 'redirect'>): Promise<string_uri_part>;
    getMyBoards(): Observable<IGetMyBoardsResponse>;
    fileUpload(file: Blob): Promise<string_url>;
    translateMessages(language: string_translate_language): Promise<ITranslateMessage[]>;
    missingTranslateMessage(missingTranslateMessage: ITranslateMessage): Promise<any>;
    private get;
    private post;
    private processResponse;
}
/**
 * TODO: !! Listen on RoutingSystem and save it into myBoards
 */
