// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { ILoaderProps } from './Loader/Loader';
interface IRefreshContentComponentProps extends ILoaderProps {
    /**
     * Refresh interval in milisecondes
     */
    interval: number;
    /**
     * The content to be rendered
     */
    content: () => JSX.Element | JSX.Element[];
}
interface IRefreshContentComponentState {
    content: JSX.Element | JSX.Element[] | null;
}
/**
 * Utility for mounting content, which should be regularly refreshed
 *
 * @collboard-modules-sdk
 */
export declare class RefreshContentComponent extends React.Component<
    IRefreshContentComponentProps,
    IRefreshContentComponentState
> {
    state: IRefreshContentComponentState;
    constructor(props: IRefreshContentComponentProps);
    private loop;
    componentWillUnmount(): void;
    render(): JSX.Element | JSX.Element[] | null;
}
export {};
/**
 * TODO: Make this a functional component with hooks
 */
