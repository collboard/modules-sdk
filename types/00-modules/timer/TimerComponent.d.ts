// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="node" />
import React from 'react';
export interface ITimerComponentProps {
    millis: number;
    until?: number;
    since?: number;
    static?: number;
    warnAt?: number;
}
interface ITimerComponentState {
    timestamp: number;
}
export declare class TimerComponent extends React.Component<ITimerComponentProps, ITimerComponentState> {
    state: ITimerComponentState;
    interval: NodeJS.Timeout;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export { };
/**
 * Note: In future this file will we in independent repository as external module.
 * TODO: [🏛️] Convert Class components to Functional (with hooks).
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
