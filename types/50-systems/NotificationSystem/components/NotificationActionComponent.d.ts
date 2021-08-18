// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { TranslationsSystem } from '../../TranslationsSystem/0-TranslationsSystem';
import { INotificationAction } from '../INotification';
interface INotificationActionComponentProps {
    translationsSystem: TranslationsSystem;
    action: INotificationAction;
}
export declare function NotificationActionComponent({
    translationsSystem,
    action: { title, type, onClick, href },
}: INotificationActionComponentProps): JSX.Element;
export {};
