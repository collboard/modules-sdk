// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { TranslationsSystem } from '../../TranslationsSystem/0-TranslationsSystem';
import { INotification } from '../INotification';
interface IAnnouncementComponentProps {
    translationsSystem: TranslationsSystem;
    notification: INotification;
    closeHandler: () => void;
}
/**
 * TODO: @roseckyj maybe unite AnnouncementComponent and NotificationComponent
 */
export declare function AnnouncementComponent({
    translationsSystem,
    notification: { type, onClick, href, title, subtitle, canBeClosed, body, actions },
    closeHandler,
}: IAnnouncementComponentProps): JSX.Element;
export {};
