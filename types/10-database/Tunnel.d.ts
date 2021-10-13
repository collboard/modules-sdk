// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IConnectionIdentity } from '../50-systems/IdentitySystem/IIdentity';
export declare class Tunnel implements IConnectionIdentity {
    id: number;
    userUUID: string | null;
    browserUUID: string;
    sessionUUID: string;
    instanceUUID: string;
    boardApiUUID: string;
    connectionUUID: string;
    remoteInstanceUUID: string;
    uriId: string;
    clientVersion: string;
    remoteVersion: string;
    start: Date;
    end: Date | null;
}
