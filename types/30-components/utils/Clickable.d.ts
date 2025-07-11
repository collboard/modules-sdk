// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { string_url } from '../../40-utils/typeAliases';
type IClickableProps = React.PropsWithChildren<{
    onClick?: React.MouseEventHandler;
    href?: string_url;
    hrefByJavascript?: boolean;
    className?: string;
}>;
/**
 * @collboard-modules-sdk
 */
export declare function Clickable({
    onClick,
    href,
    hrefByJavascript,
    className,
    children,
}: IClickableProps): JSX.Element;
export {};
