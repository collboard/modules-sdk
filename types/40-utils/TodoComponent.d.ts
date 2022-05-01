// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
declare type ITODOComponentProps = React.PropsWithChildren<{
    TODO?: string;
}>;
/**
 * This is just helper for marking part of a JSX code with TODOs.
 */
export declare class TODOComponent extends React.Component<ITODOComponentProps> {
    render(): JSX.Element;
}
/**
 * This is just helper for marking part of a code with TODOs.
 */
export declare function TODO<T>(value: T, TODOcomment?: string): T;
export {};
