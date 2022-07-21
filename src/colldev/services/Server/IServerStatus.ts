import { IColldevSyncerSocket } from './IColldevSyncerSocket';

export interface IServerStatus {
    isReady: boolean;
    errors: Array<IColldevSyncerSocket.IError>;
    clients: Record<string, IColldevSyncerSocket.clientStatus>;
}
