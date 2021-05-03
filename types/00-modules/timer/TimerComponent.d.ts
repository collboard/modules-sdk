
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="node" />
import * as React from 'react';
/**
 *
 * Note: In future this file will we in indipendent repository as external module.
 *
 */
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
export {};

                  