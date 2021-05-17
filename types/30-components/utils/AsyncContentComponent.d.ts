// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
interface IAsyncContentComponentProps {
    /**
     * Component to be rendered before the content is loaded
     *
     * If not set, default loading is used
     */
    loading?: JSX.Element;
    /**
     * The async content to be rendered
     */
    content: () => Promise<JSX.Element | JSX.Element[]>;
}
interface IAsyncContentComponentState {
    content: JSX.Element | JSX.Element[] | null;
}
/**
 * Utility for mounting async content
 *
 * @collboard-modules-sdk
 */
export declare class AsyncContentComponent extends React.Component<
    IAsyncContentComponentProps,
    IAsyncContentComponentState
> {
    state: IAsyncContentComponentState;
    constructor(props: IAsyncContentComponentProps);
    UNSAFE_componentWillReceiveProps(props: IAsyncContentComponentProps): void;
    private unmounted;
    componentWillUnmount(): void;
    private load;
    render(): JSX.Element;
}
export {};
