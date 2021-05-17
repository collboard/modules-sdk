// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { Observable } from 'rxjs';
import { IAwaitable } from '../../40-utils/IAwaitable';
interface IObservableContentComponentProps {
    /**
     * Component to be rendered before the content is loaded
     *
     * If not set, default loading is used
     */
    loading?: JSX.Element;
    /**
     * You can put here any RxJS observable. For example BehaviorSubject.
     */
    content: Observable<IAwaitable<JSX.Element | JSX.Element[]>>;
}
/**
 * Utility for mounting RxJS observable content
 *
 * @collboard-modules-sdk
 */
export declare function ObservableContentComponent({ loading, content }: IObservableContentComponentProps): JSX.Element;
export {};
