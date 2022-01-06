// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
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
