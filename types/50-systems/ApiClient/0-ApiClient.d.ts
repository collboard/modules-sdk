// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Observable } from 'rxjs';
import { string_uri_part, string_url, string_version } from '../../40-utils/typeAliases';
import { ISystems } from '../00-SystemsContainer/ISystems';
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
    constructor(systemsContainer: ISystems, apiUrl: string);
    private apiClientCache;
    protected init(): Promise<void>;
    getAbout(): Promise<{
        version: string;
        remoteInstanceUUID: string_version;
    }>;
    connectToBoard(uriId: string_uri_part): Promise<MaterialArtVersioningSystem>;
    createNewBoard(options: Omit<ICreateBoardOptions, 'redirect'>): Promise<string_uri_part>;
    getMyBoards(): Observable<IGetMyBoardsResponse>;
    fileUpload(file: Blob): Promise<string_url>;
    translateMessages(): Promise<ITranslateMessage[]>;
    missingTranslateMessage(missingTranslateMessage: ITranslateMessage): Promise<any>;
    private get;
    private post;
    private processResponse;
}
