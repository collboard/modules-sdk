import { IColldevSyncerSocket } from './IColldevSyncerSocket';

export interface IServerStatus {
    ready: boolean;
    errors: IColldevSyncerSocket.IError[];
    clients: Record<string, IColldevSyncerSocket.clientStatus>;
}
