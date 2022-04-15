// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
export declare type IUploadZoneProps = React.PropsWithChildren<{
    isClickable?: boolean;
    onFilesOver?: (isFileOver: boolean) => void;
    onFiles: (droppedFiles: File[]) => void;
}>;
export declare function UploadZone({ children, isClickable, onFilesOver, onFiles }: IUploadZoneProps): JSX.Element;
/**
 * TODO: @hejny Probbably when there is only one UploadZone rendered on entire page, expand invisible dropzone to full page
 * TODO: @hejny Do not allow to drop placeholder of SigmaStamp logo
 * TODO: @hejny Allow to recieve item from Clipboard
 */
