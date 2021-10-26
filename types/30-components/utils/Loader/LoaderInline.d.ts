// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import * as React from 'react';
import { IArrayable } from '../../../40-utils/toArray';
export declare type ILoaderInlineProps = React.PropsWithChildren<{
    icon?: string;
    animation?: IArrayable<string>;
}>;
export declare function LoaderInline({ children, icon, animation }: ILoaderInlineProps): JSX.Element;