// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { TranslationsSystem } from '../../../TranslationsSystem/0-TranslationsSystem';
import { INotification } from '../../INotification';
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
/**
 * TODO: Probably not use functional component in this project
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
