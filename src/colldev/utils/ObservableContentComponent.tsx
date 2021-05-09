import * as React from 'react';
import { Observable } from 'rxjs';
import { IAwaitable } from './destroyables/IAwaitable';

/**
 * TODO: Make from this some microlibrary
 */

interface IObservableContentComponentProps {
    loading: JSX.Element;
    /**
     * You can put here any RxJS observable. For example BehaviorSubject.
     */
    content: Observable<IAwaitable<JSX.Element | JSX.Element[]>>;
}

interface IObservableContentComponentState {
    content: JSX.Element | JSX.Element[] | null;
}

// !! Key prop - is it still relevant
// !! TODO: Warn when key not used
// !! TODO: Use keys in usages
// !! TODO: Probbaly use keys in other async helpers

export function ObservableContentComponent({ loading, content }: IObservableContentComponentProps) {
    const [state, setState] = React.useState<IObservableContentComponentState>({ content: loading });

    React.useEffect(() => {
        const subscription = content.subscribe(async (newContentAwaitable) => {
            const newContent = await newContentAwaitable;
            // console.log({ newContent });
            setState({ content: newContent });
        });

        return () => subscription.unsubscribe();
    }, [content]);

    return <>{state.content}</>;
}
