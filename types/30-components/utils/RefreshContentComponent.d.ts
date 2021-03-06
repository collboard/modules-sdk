// ๐ญ GENERATED WITH generate-modules-sdk
// โ ๏ธ Warning: Do not edit by hand, all changes will be lost on next execution!
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
    content: () => JSX.Element | Array<JSX.Element>;
}
interface IRefreshContentComponentState {
    content: JSX.Element | Array<JSX.Element> | null;
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
 * TODO: [๐๏ธ] Convert Class components to Functional (with hooks).
 * TODO: [๐ฉฑ] Probbably do not suffix components with "Component" (or make better decisions [๐โโ๏ธ])
 * TODO: [๐งต] Move to external LIB for react loadables
 */
