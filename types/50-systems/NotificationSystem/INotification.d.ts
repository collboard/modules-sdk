// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { string_module_name, string_url } from '../../40-utils/typeAliases';
import { string_tranlate_language } from '../TranslationsSystem/0-TranslationsSystem';
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
    readonly title?: INotificationMessage;
    readonly subtitle?: INotificationMessage;
    readonly body?: INotificationMessage;
    readonly type?: 'info' | 'warning' | 'error' | 'success';
    readonly priority?: number;
    readonly places?: NotificationPlace[];
    readonly canBeClosed?: boolean;
    readonly onClick?: INotificationOnClickHandler;
    readonly href?: string_url;
}
export declare type INotificationMessage =
    | INotificationBaseMessage
    | Partial<Record<string_tranlate_language, INotificationBaseMessage>>;
export declare type INotificationBaseMessage = string | JSX.Element;
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
    readonly title: INotificationMessage;
    /**
     * The URL of the image used to represent the notification when there is not enough space to display the notification itself.
     */
    readonly icon?: string;
    readonly type?: 'ok' | 'cancel' | 'more' | 'primary';
    readonly onClick?: INotificationOnClickHandler;
    readonly href?: string_url;
}
export declare type INotificationOnClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
