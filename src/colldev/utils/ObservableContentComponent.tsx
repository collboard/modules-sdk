import * as React from 'react';
import { Observable } from 'rxjs';
import { Promisable } from 'type-fest';

/**
 * ⚠️Warning: THIS IS A COPY. Do not edit it here but:
 * https://github.com/collboard/collboard/blob/refactoring/persisting-connector-advanced/src/30-components/utils/ObservableContentComponent.tsx
 *
 */
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
    content: Observable<Promisable<JSX.Element>>;
}

interface IObservableContentComponentState {
    content: JSX.Element;
}

/**
 * ⚠️Warning: THIS IS A COPY. Do not edit it here but:
 * https://github.com/collboard/collboard/blob/refactoring/persisting-connector-advanced/src/30-components/utils/ObservableContentComponent.tsx
 *
 */
export function ObservableContentComponent({ loading, content }: IObservableContentComponentProps) {
    const [state, setState] = React.useState<IObservableContentComponentState>({ content: loading || <></> });

    React.useEffect(() => {
        const subscription = content.subscribe(async (newContentAwaitable) => {
            const newContent = await newContentAwaitable;
             // Note+TODO: On this line the component can be unmounted but setState is still called one time again. React will indicates a memory leak (it happen only once), it is not a bit deal but maybe solve it.
            setState({ content: newContent });
        });

        return () => subscription.unsubscribe();
    }, [content]);

    return <>{state.content}</>;
}
