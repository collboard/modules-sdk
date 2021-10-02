// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import * as React from 'react';
interface IAsyncButtonComponentProps
    extends React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    /**
     * Component to be rendered after button is clicked and before onClick fullfils
     *
     * If not set, default <Loader/> is used
     */
    loader?: JSX.Element;
    onClick: React.MouseEventHandler<any>;
}
/**
 * Utility for button with pending state after click
 *
 * @collboard-modules-sdk
 */
export declare function AsyncButtonComponent(props: IAsyncButtonComponentProps): JSX.Element;
export {};
