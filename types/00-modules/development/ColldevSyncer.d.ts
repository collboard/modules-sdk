// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISystemsExtended } from '../../50-systems/00-SystemsContainer/ISystems';
import { IStorageSyncerOptions, StorageSyncer } from '../../50-systems/ModuleStore/Syncers/StorageSyncer';
import { IColldevSyncerSocket } from './IColldevSyncerSocket';
/**
 * ColldevSyncer installs / uninstalls modules according colldev CLI command server
 * it contains internally its modulesStorage
 * it is connected via socket.io to colldev CLI command server
 */
export declare class ColldevSyncer extends StorageSyncer {
    private declareModuleCallbackName;
    private socketClient;
    private storageSystem;
    private storage;
    private _colldevUrl;
    get colldevUrl(): string;
    set colldevUrl(colldevUrl: string);
    clientStatus: IColldevSyncerSocket.clientStatus;
    constructor(systems: ISystemsExtended, options?: IStorageSyncerOptions);
    protected initSyncer(): Promise<void>;
    private bundleRecievedQueue;
    private reestablishConnection;
    private sendClientStatus;
    destroy(): Promise<void>;
}
