// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from 'destroyable';
import { string_uri_part, string_url } from '../../40-utils/typeAliases';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { MaterialArtVersioningSystem } from '../ArtVersionSystem/0-MaterialArtVersioningSystem';
import { IArtVersioningSystem } from '../ArtVersionSystem/IArtVersionSystem';
import { IClosePreventable } from '../ClosePreventionSystem/IClosePreventable';
/**
 * @collboard-system
 */
export declare class BoardApiClient
    extends MaterialArtVersioningSystem
    implements IClosePreventable, IDestroyable, IArtVersioningSystem {
    private apiUrl;
    private uriId;
    private socketClient;
    constructor(systems: ISystemsExtended, apiUrl: string_url, uriId: string_uri_part);
    destroy(): Promise<void>;
    protected init(): Promise<void>;
    private atLeastOnceConnectedResolve;
    private atLeastOnceConnectedReject;
    readonly atLeastOnceConnected: Promise<unknown>;
    private connected;
    private boardApiIdentity;
    private createIdentity;
    private establishConnection;
    /**
     * TODO: ColldevSyncer does not need keepConnectionAlive so probbably BoardApiClient wont either
     */
    private keepConnectionAlive;
    private sendToServerCommitChainThrottleQueues;
    private sendToServerCommitChainThrottleQueues__push;
    private sendToServerCommitChainThrottleQueues__shift;
    private runServerThrottleQueue;
    private syncLocalObjectsToServer;
    get canBeClosed(): boolean;
}
