
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IConnectionIdentity } from '../../src/50-systems/IdentitySystem/IIdentity';
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

                  