// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { string_uri_part } from '../../40-utils/typeAliases';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { MaterialArtVersioningSystem } from '../ArtVersionSystem/0-MaterialArtVersioningSystem';
import { IArtVersioningSystem } from '../ArtVersionSystem/IArtVersionSystem';
import { IClosePreventable } from '../ClosePreventionSystem/IClosePreventable';
/**
 * @collboard-system
 */
export declare class BoardApiClient
    extends MaterialArtVersioningSystem
    implements IClosePreventable, IDestroyable, IArtVersioningSystem
{
    private apiUrl;
    private uriId;
    private socketClient;
    constructor(systems: ISystemsExtended, apiUrl: URL, uriId: string_uri_part);
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
    private sendToServerCommitTreeThrottleQueues;
    private sendToServerCommitTreeThrottleQueues__push;
    private sendToServerCommitTreeThrottleQueues__shift;
    private runServerThrottleQueue;
    private syncLocalObjectsToServer;
    get canBeClosed(): boolean;
}
