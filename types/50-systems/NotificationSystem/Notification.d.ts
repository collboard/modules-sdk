// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { string_module_name } from '../../40-utils/typeAliases';
import { NotificationSystem } from './0-NotificationSystem';
import { INotification, INotificationAction, INotificationCallback } from './INotification';
export declare class Notification implements INotification {
    readonly tag: string;
    readonly module?: string_module_name;
    actions: INotificationAction[];
    title?: string;
    body: string | JSX.Element;
    type: 'info' | 'warning' | 'error' | 'success';
    canBeClosed: boolean;
    onClick?: INotificationCallback;
    private notificationSystem;
    constructor(notification: INotification);
    publish(notificationSystem: NotificationSystem): void;
    constrict(): void;
}
