// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
export declare const OVERLAY_CONTAINER_ID = 'custom-modal-container';
interface IPageOverlayProps {
    children?: Array<JSX.Element | false> | JSX.Element;
    onClick?: () => void;
}
/**
 * Renders the content inside a darkened page overlay blocking all
 * interactions with page behind
 *
 * **You probably want to use Modal or CategorizedModal instead.**
 *
 * **Warning: Do not try to mount more, than one PageOverlay at a time,
 * it may lead to undefined behavior!**
 *
 * @collboard-modules-sdk
 */
export declare class PageOverlay extends React.Component<IPageOverlayProps> {
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
