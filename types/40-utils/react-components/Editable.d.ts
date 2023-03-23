// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
/**
 * Which part of the editable element is focused across the rerendering
 *
 * @deprecated [🍿] Do not use enums but object as const OR 'LITERAL VALUES' instead
 */
export declare enum EditableFocus {
    /**
     * Nothign is focused
     */
    None = 0,
    /**
     * Keep focus on start
     */
    Start = 1,
    /**
     * Focus on end for almost fluent editing
     */
    End = 2,
    /**
     * Select all text
     */
    All = 3,
    /**
     * Try to keep focus for fluent editing
     */
    Keep = 4,
}
interface IEditableProps {
    children: React.ReactNode;
    onInput?(event: React.FormEvent<HTMLDivElement>): void;
    focus?: EditableFocus;
    isEditable?: boolean;
    style?: React.CSSProperties;
}
/**
 * Editable is wrapper for innerHTML of a DOM element.
 *
 * @collboard-modules-sdk
 */
export declare function Editable(props: IEditableProps): JSX.Element;
export { };
/**
 * TODO: Probbably move some of functionality in "ref={(element) => {" to new hook useFocusPreservation
 * TODO: Replace all contentEditable, contenteditable across the codebase with <Editable
 */
