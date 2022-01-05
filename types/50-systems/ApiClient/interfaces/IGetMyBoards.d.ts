// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
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
    boardName: string;
    lastEdit: Date;
}
