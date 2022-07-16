// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { TranslationsSystem } from '../../../TranslationsSystem/0-TranslationsSystem';
import { INotificationAction } from '../../INotification';
interface INotificationActionComponentProps {
    translationsSystem: TranslationsSystem;
    action: INotificationAction;
}
export declare function NotificationActionComponent({
    translationsSystem,
    action: { title, type, onClick, href },
}: INotificationActionComponentProps): JSX.Element;
export {};
/**
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
