
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import * as React from 'react';
interface IErrorBoundaryProps extends React.PropsWithChildren<{}> {
}
interface IErrorBoundaryState {
    hasError: boolean;
}
export declare class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
    };
    componentDidCatch(error: Error): void;
    render(): {} | null | undefined;
}
export {};

                  