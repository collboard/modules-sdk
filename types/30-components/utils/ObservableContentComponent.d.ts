// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

/// <reference types="react" />
import { Observable } from 'rxjs';
import { Promisable } from 'type-fest';
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
    content: Observable<Promisable<JSX.Element>>;
}
/**
 * Utility for mounting RxJS observable content
 *
 * @collboard-modules-sdk
 */
export declare function ObservableContentComponent({ loader, content }: IObservableContentComponentProps): JSX.Element;
export {};
