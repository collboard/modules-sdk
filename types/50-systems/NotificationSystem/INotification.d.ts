// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { string_module_name, string_url } from '../../40-utils/typeAliases';
/**
 * Similar interface to Notification Web API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Notification
 */
export interface INotification {
    /**
     * Identifying tag for the notification.
     */
    readonly tag: string;
    readonly module?: string_module_name;
    readonly actions?: INotificationAction[];
    readonly title?: string;
    readonly body: string | JSX.Element;
    readonly type?: 'info' | 'warning' | 'error' | 'success';
    readonly canBeClosed?: boolean;
    readonly onClick?: INotificationCallback;
}
export interface INotificationAction {
    /**
     * Identifying name for the action.
     */
    readonly action: string;
    /**
     *The string describing the action that is displayed to the user.
     */
    readonly title: string;
    /**
     * The URL of the image used to represent the notification when there is not enough space to display the notification itself.
     */
    readonly icon?: string;
    readonly type?: 'ok' | 'cancel' | 'more';
    readonly onClick?: INotificationCallback;
    readonly href?: string_url;
}
export declare type INotificationCallback = () => void;
