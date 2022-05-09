// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
declare type IErrorBoundaryProps = React.PropsWithChildren<{}>;
interface IErrorBoundaryState {
    tag?: string;
    hasError: boolean;
}
/**
 * @collboard-modules-sdk
 */
export declare class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        tag: string;
    };
    componentDidCatch(error: Error): void;
    render(): React.ReactNode;
}
export {};
