// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { Transform } from 'xyzt';
import { Loadable } from '../../../40-utils/typeHelpers';
import { string_uuid } from './../../../40-utils/typeAliases';
declare type IArtShellProps = React.PropsWithChildren<{
    artId: string_uuid;
    zIndex: number;
    transform?: Loadable<Transform>;
    opacity?: number;
    isSelectable?: boolean;
}>;
/**
 * @collboard-modules-sdk
 * @sideeffect Creating elements with id={artId} to be findable in the DOM
 * @sideeffect Creating elements with class __ArtShell for findArtShellElement
 */
export declare function ArtShell(props: IArtShellProps): JSX.Element;
export {};
/**
 * TODO: [✏️] Fix> react-dom.development.js:630 Error: <svg> attribute width: Expected length, "NaN".
 * TODO: Probably pass something more abstract than zIndex to ArtShell (or include this into transform)
 * TODO: Use isSelectable
 */
