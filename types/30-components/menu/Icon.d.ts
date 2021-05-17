// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import * as React from 'react';
import { IIconAnonymous } from './IIconAnonymous';
/**
 * Generic icon component
 *
 * *Note: If not rendered within a menu, there is no guarantee
 * of being rendered correctly*
 *
 * @collboard-modules-sdk
 */
export declare class Icon extends React.Component<IIconAnonymous> {
    private clickHandler;
    render(): JSX.Element;
}
interface IIconColorProps {
    color: string;
    onClick?: () => void;
    className?: string;
    active?: boolean;
    inactive?: boolean;
}
/**
 * Color picker icon component
 *
 * *Note: If not rendered within a menu, there is no guarantee
 * of being rendered correctly*
 *
 * @collboard-modules-sdk
 */
export declare function IconColor({ className, color, active, inactive, onClick }: IIconColorProps): JSX.Element;
export {};
