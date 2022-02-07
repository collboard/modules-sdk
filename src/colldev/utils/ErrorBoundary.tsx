import { Text } from 'ink';
import React from 'react';

type IErrorBoundaryProps = React.PropsWithChildren<{}>;

interface IErrorBoundaryState {
    hasError: boolean;
    error: any;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    /*
    componentDidCatch(error: Error) {
        console.error(error);
    }
    */

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <Text color="red">Something went wrong.</Text>
                </>
            );
        }

        return this.props.children;
    }
}
