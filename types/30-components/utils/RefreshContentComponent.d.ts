// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
interface IRefreshContentComponentProps {
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
