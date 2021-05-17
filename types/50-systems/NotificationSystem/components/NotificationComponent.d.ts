// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { INotification } from '../INotification';
interface INotificationComponentProps {
    notification: INotification;
    closeHandler: () => void;
}
/**
 * TODO: @roseckyj maybe unite AnnouncementComponent and NotificationComponent
 */
export declare function NotificationComponent({
    notification: { type, onClick, title, subtitle, canBeClosed, body, actions },
    closeHandler,
}: INotificationComponentProps): JSX.Element;
export {};
