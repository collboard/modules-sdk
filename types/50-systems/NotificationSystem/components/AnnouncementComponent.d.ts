// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { INotification } from '../INotification';
interface IAnnouncementComponentProps {
    notification: INotification;
    closeHandler: () => void;
}
/**
 * TODO: @roseckyj maybe unite AnnouncementComponent and NotificationComponent
 */
export declare function AnnouncementComponent({
    notification: { type, onClick, title, subtitle, canBeClosed, body, actions },
    closeHandler,
}: IAnnouncementComponentProps): JSX.Element;
export {};
