
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { string_uri_part } from '../../../40-utils/typeAliases';
import { IRequest, IResponse } from './IRequestResponse';
export interface IGetMyBoardsRequest extends IRequest {
    fromDate?: Date;
}
export interface IGetMyBoardsResponse extends IResponse {
    date: Date;
    data: IBoardInfo[];
}
export interface IBoardInfo {
    uriId: string_uri_part;
    name: string;
    lastOpen: Date;
}

                  