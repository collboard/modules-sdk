import { IColldevSyncerSocket } from './IColldevSyncerSocket';

export interface IServerStatus {
    isReady: boolean;
    errors: IColldevSyncerSocket.IError[];
    clients: Record<string, IColldevSyncerSocket.clientStatus>;
}
