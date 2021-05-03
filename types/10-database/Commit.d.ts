
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { string_uri_part, string_uuid, string_version } from '../40-utils/typeAliases';
export declare class Commit {
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
    isSeenBy(clientUuid: string): boolean;
    addSeenBy(clientUuid: string): void;
    persist: number;
    created: Date;
    uriId: string_uri_part | null;
    artPolygon: string | null;
    artClass: string;
    art: object;
}

                  