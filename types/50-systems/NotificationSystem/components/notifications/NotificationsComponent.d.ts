// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import * as React from 'react';
import { TranslationsSystem } from '../../../TranslationsSystem/0-TranslationsSystem';
import { NotificationSystem } from '../../0-NotificationSystem';
import { NotificationPlace } from '../../INotification';
interface INotificationsComponentProps {
    translationsSystem: TranslationsSystem;
    notificationSystem: NotificationSystem;
    place: NotificationPlace;
}
export declare class NotificationsComponent extends React.Component<INotificationsComponentProps> {
    render(): JSX.Element;
}
export {};
