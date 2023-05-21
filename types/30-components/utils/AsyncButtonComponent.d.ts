// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React, { ReactNode } from 'react';
import { Promisable } from 'type-fest';
import { string_href } from '../../40-utils/typeAliases';
import { ILoaderProps } from './Loader/ILoaderProps';
interface IAsyncButtonComponentProps extends ILoaderProps {
    /**
     * Component to be rendered after button is clicked and before onClick fullfils
     *
     * If not set, default <Loader/> is used
     */
    loader?: JSX.Element;
    /**
     * Click handler which can return promise and the button will show loading state (and can not be pressed twice) until resolved
     */
    onClick(event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>): Promisable<void>;
    /**
     * If set, <a href="..."> will be used
     *
     * Note: Outer element will be always <div to keep consistency
     */
    href?: string_href;
    /**
     * Additional className(s)
     */
    className?: string;
    /**
     * Additional styling
     */
    style?: any;
    /**
     * If set, onClick will not be called
     */
    isDisabled?: boolean;
    /**
     * Content of the button
     */
    children: ReactNode;
}
/**
 * Utility for button with pending state after click
 *
 * @collboard-modules-sdk
 */
export declare function AsyncButtonComponent({
    loader,
    onClick,
    href,
    className,
    style,
    children,
    isDisabled: disabled,
}: IAsyncButtonComponentProps): JSX.Element;
export {};
/**
 * TODO: <Clickable vs. <Button (use <button as element) vs. (deprecated <AsyncButtonComponent)
 * TODO: Use here alt and canLoadForever
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
