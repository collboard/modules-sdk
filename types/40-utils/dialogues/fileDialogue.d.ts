// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IArrayable } from '../toArray';
import { string_mime_type_with_wildcard } from '../typeAliases';
interface IFileDialogueOptions {
    /**
     * One or more unique file type specifiers describing file types to allow
     */
    accept: IArrayable<string_mime_type_with_wildcard>;
    /**
     * TODO:
     * The capture attribute specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. Values include user and environment. The capture attribute is supported on the file input type.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture
     */
    /**
     * A Boolean which, if present, indicates that the user may choose more than one file
     */
    multiple?: boolean;
}
/**
 * @returns array of files NOT FileList
 * TODO: As some cathegory of utils which replace alert, prompt, confirm by better async options like this or NotificationSystem
 *
 * @collboard-modules-sdk
 */
export declare function fileDialogue({ accept, multiple }: IFileDialogueOptions): Promise<File[]>;
export {};
