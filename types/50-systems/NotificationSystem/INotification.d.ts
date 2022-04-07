// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { string_module_name, string_url } from '../../40-utils/typeAliases';
import { IMessage } from '../../40-utils/IMessage';
/**
 * Similar interface to Notification Web API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Notification
 *
 * @collboard sdk
 */
export interface INotification {
    /**
     * Identifying tag for the notification.
     */
    readonly tag: string;
    readonly module?: string_module_name;
    readonly actions?: INotificationAction[];
    readonly title?: IMessage;
    readonly subtitle?: IMessage;
    readonly body?: IMessage;
    readonly type?: 'info' | 'warning' | 'error' | 'success';
    readonly priority?: number;
    readonly places?: NotificationPlace[];
    readonly canBeClosed?: boolean;
    readonly onClick?: INotificationOnClickHandler;
    readonly href?: string_url;
}
/**
 * @collboard sdk
 */
export declare enum NotificationPlace {
    Board = 'BOARD',
    WelcomeModalAnnouncement = 'ANNOUNCEMENT',
}
/**
 * @collboard sdk
 */
export interface INotificationAction {
    /**
     * Identifying name for the action.
     */
    readonly action: string;
    /**
     *The string describing the action that is displayed to the user.
     */
    readonly title: IMessage;
    /**
     * The URL of the image used to represent the notification when there is not enough space to display the notification itself.
     */
    readonly icon?: string;
    readonly type?: 'ok' | 'cancel' | 'more' | 'primary';
    readonly onClick?: INotificationOnClickHandler;
    readonly href?: string_url;
}
export declare type INotificationOnClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
