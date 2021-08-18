// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { AbstractSystem } from '../AbstractSystem';
import { INotification } from './INotification';
import { NotificationRegistration } from './NotificationRegistration';
/**
 *
 * @collboard-system
 */
export declare class NotificationSystem extends AbstractSystem {
    notifications: INotification[];
    protected init(): Promise<void>;
    publish(notification: INotification): NotificationRegistration;
    /**
     * Constricts (unpublish) published notification
     *
     * @param notification published notification or its tag as string
     */
    constrict(notificationOrTag: INotification | string): void;
}
