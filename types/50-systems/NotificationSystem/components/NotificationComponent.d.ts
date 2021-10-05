// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { TranslationsSystem } from '../../TranslationsSystem/0-TranslationsSystem';
import { INotification } from '../INotification';
interface INotificationComponentProps {
    translationsSystem: TranslationsSystem;
    notification: INotification;
    closeHandler: () => void;
}
/**
 * TODO: @roseckyj maybe unite AnnouncementComponent and NotificationComponent
 */
export declare function NotificationComponent({
    translationsSystem,
    notification: { type, onClick, href, title, subtitle, canBeClosed, body, actions },
    closeHandler,
}: INotificationComponentProps): JSX.Element;
export {};
