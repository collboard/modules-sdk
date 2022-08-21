// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_uri_part, string_uuid, string_version } from '../40-utils/typeAliases';
import { BusinessName } from '../50-systems/BusinessSystem/configuration/BusinessName';
import { ICommitData } from './interfaces/ICommitData';
export declare class Commit implements ICommitData {
    [index: string]: string | number | null | any;
    id: number;
    boardId: string_uuid;
    treeId: string_uuid;
    commitId: string_uuid;
    previousId: string_uuid | null;
    current: number;
    version: number;
    replacingStrategy: 'KEEP' | 'REPLACE' | null;
    module: string;
    moduleVersion: string_version;
    remoteVersion: string_version;
    operationName: string | null;
    operationId: string | null;
    author: string;
    seenBy: object;
    isSeenBy(clientId: string): boolean;
    addSeenBy(clientId: string): void;
    persist: number;
    created: Date;
    businessName: BusinessName;
    uriId: string_uri_part | null;
    artClass: string;
    art: any;
    /**
     * Check if the given data is valid commit
     *
     * @param possibleCommit
     * @returns true if the data are implementing ICommitData
     */
    static isCommitLike(possibleCommit: any): possibleCommit is ICommitData;
}
