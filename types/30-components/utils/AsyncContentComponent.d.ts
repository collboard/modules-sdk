// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IAwaitable } from '../../40-utils/IAwaitable';
import { IFactorable } from '../../40-utils/IFactory';
interface IAsyncContentComponentProps {
    /**
     * Component to be rendered before the content is loaded
     *
     * If not set, default <Loader/> is used
     */
    loader?: JSX.Element;
    /**
     * The async content to be rendered
     */
    content: IFactorable<IAwaitable<JSX.Element>>;
}
/**
 * Utility for mounting RxJS observable content
 *
 * @collboard-modules-sdk
 */
export declare function AsyncContentComponent({ loader, content }: IAsyncContentComponentProps): JSX.Element;
export {};
