// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IAwaitable } from 'destroyable';
import { Observable } from 'rxjs';
/**
 * TODO: Make from this some microlibrary
 */
interface IObservableContentComponentProps {
    /**
     * Component to be rendered before the content is loaded
     *
     * If not set, default <Loader/> is used
     */
    loader?: JSX.Element;
    /**
     * You can put here any RxJS observable. For example BehaviorSubject.
     */
    content: Observable<IAwaitable<JSX.Element>>;
}
/**
 * Utility for mounting RxJS observable content
 *
 * @collboard-modules-sdk
 */
export declare function ObservableContentComponent({ loader, content }: IObservableContentComponentProps): JSX.Element;
export {};
