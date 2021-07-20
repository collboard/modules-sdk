import * as React from 'react';

/**
 * ⚠️Warning: THIS IS A COPY. Do not edit it here but:
 * https://github.com/collboard/collboard/blob/refactoring/persisting-connector-advanced/src/30-components/utils/ObservableContentComponent.tsx
 *
 */
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
    content: () => Promise<JSX.Element>;
}

/**
 * ⚠️Warning: THIS IS A COPY. Do not edit it here but:
 * https://github.com/collboard/collboard/blob/refactoring/persisting-connector-advanced/src/30-components/utils/ObservableContentComponent.tsx
 *
 */
interface IAsyncContentComponentState {
    content: JSX.Element;
}

/**
 * ⚠️Warning: THIS IS A COPY. Do not edit it here but:
 * https://github.com/collboard/collboard/blob/refactoring/persisting-connector-advanced/src/30-components/utils/ObservableContentComponent.tsx
 * Utility for mounting RxJS observable content
 *
 * @collboard-modules-sdk
 */
export function AsyncContentComponent({ loader, content }: IAsyncContentComponentProps) {
    if (React.isValidElement(content)) {
        return content;
    }

    // Note: This is an optimalization of AsyncContentComponent. It will works as it is not breaking call order
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = React.useState<IAsyncContentComponentState>({ content: loader || <></> });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        let mounted = true;

        (async () => {
            const contentResolved = await content();

            if (!mounted) return;
            setState({ content: contentResolved });
        })();

        return () => {
            mounted = false;
        };
    }, [content]);

    return <>{state.content}</>;
}
