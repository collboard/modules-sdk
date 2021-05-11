// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
interface IRefreshContentComponentProps {
    interval: number;
    content: () => JSX.Element | JSX.Element[];
}
interface IRefreshContentComponentState {
    content: JSX.Element | JSX.Element[] | null;
}
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
