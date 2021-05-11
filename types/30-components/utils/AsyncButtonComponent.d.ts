// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
interface IAsyncButtonComponentProps
    extends React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
    loading?: JSX.Element;
    onClick: React.MouseEventHandler<any>;
}
interface IAsyncButtonComponentState {
    loading: boolean;
}
export declare class AsyncButtonComponent extends React.Component<
    IAsyncButtonComponentProps,
    IAsyncButtonComponentState
> {
    state: IAsyncButtonComponentState;
    private onClick;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
