// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { ILoaderProps } from './utils/Loader/Loader';
export declare type IRootComponentUnloadedProps = React.PropsWithChildren<
    | {
          isLoading: false;
      }
    | ({
          isLoading: true;
      } & ILoaderProps)
>;
export declare function RootComponentUnloaded(props: IRootComponentUnloadedProps): JSX.Element;
/**
 * TODO: [🏊‍♂️] Better naming and distinction of Collboard-specific components vs utils components
 */
