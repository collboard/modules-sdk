// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { CSSProperties } from 'react';
import { string_html } from '../../40-utils/typeAliases';
export interface IEditableHtmlContentProps {
    /**
     * The content
     */
    html: string_html;
    /**
     * Is the content editable or just static html
     *
     * - If `false` there will be only simle <div/> with given static html
     * - If `true` it is editable and focused when the isEditableAndFocused is switched
     *
     * Note: On whole page there MUST be ONLY ONE instance of <Content/> which is isEditableAndFocused
     */
    isEditableAndFocused: boolean;
    /**
     * Callback when contenteditable is changed
     *
     * Note: This wont be triggered in any circumstances if isEditableAndFocused is false
     *
     * @param newContent in HTML format after change
     */
    onHtmlChange(newContent: string_html): void;
    /**
     * Callback when editing is finished
     *
    onFinish(){
        // TODO: Use OR loose
    }
    */
    /**
     * Allow to insert rich HTML by Ctrl+V
     */
    isHtmlPasteAllowed?: boolean;
    /**
     * Style for the most internal div
     */
    style?: CSSProperties;
}
/**
 * Shows the content with optional contenteditable optimized for multiplayer apps
 *
 * @collboard-modules-sdk
 */
export declare function EditableHtmlContent(props: IEditableHtmlContentProps): JSX.Element;
/**
 * TODO: Keep caret @see copilotMonkey
 * TODO: Maybe use this component ACRY instead of dangerouslySetInnerHTML
 * TODO: How is the <ContentEditable made internally
 * TODO: What is difference between onChange vs onInput in react-contenteditable
 */
