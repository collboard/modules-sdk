// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import * as React from 'react';
import { ISystemsExtended } from '../50-systems/00-SystemsContainer/ISystems';
declare type ICollboardUnloadedWithExtraJsxProps = React.PropsWithChildren<
    {
        renderExtraJsx?: boolean;
        systems: ISystemsExtended;
    } & (
        | {
              isLoading: false;
          }
        | {
              /**
               * Describe why is the loader used
               */
              description: string;
              isLoading: true;
          }
    )
>;
export declare function CollboardUnloadedWithExtraJsx(props: ICollboardUnloadedWithExtraJsxProps): JSX.Element;
export {};
