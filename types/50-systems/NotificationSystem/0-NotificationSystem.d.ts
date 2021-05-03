
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { AbstractSystem } from '../AbstractSystem';
import { INotification } from './INotification';
export declare class NotificationSystem extends AbstractSystem {
    notifications: INotification[];
    protected init(): Promise<void>;
    publish(notification: INotification): void;
    constrict(notification: INotification): void;
}

                  