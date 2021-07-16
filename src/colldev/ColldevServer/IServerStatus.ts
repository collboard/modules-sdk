import { IColldevSyncerSocket } from './IColldevSyncerSocket';

export interface IServerStatus {
    ready: boolean;
    // TODO: !!! errors
    error: IColldevSyncerSocket.IError | null;
    clients: Record<string, IColldevSyncerSocket.clientStatus>;
}
