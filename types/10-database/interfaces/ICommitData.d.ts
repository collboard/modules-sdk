// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { string_uri_part, string_uuid, string_version } from '../../40-utils/typeAliases';
import { AbstractArt } from '../../71-arts/20-AbstractArt';
import { CornerstoneArt } from '../../71-arts/30-CornerstoneArt';
/**
 *
 * TODO: ICommitData should be under 00-IPersistingConnector under src
 * TODO: Use this instead of Commit in lot of places
 * TODO: Annotate values (and use this annotation in comments)
 */
export interface ICommitData {
    [index: string]: string | number | null | any;
    id: number;
    boardId: string_uuid;
    treeId: string_uuid;
    commitId: string_uuid;
    previousId: string_uuid | null;
    /**
     * This is just computed redundant information that the commit is last in the tree.
     */
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
    persist: number;
    created: Date;
    uriId: string_uri_part | null;
    artPolygon: string | null;
    artClass: string;
    /**
     * TODO: Create IAbstractArt and use it here and in other places
     */
    art: AbstractArt;
}
export interface ICornerstoneCommitData {
    art: CornerstoneArt;
}
