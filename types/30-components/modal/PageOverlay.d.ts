// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
type IPageOverlayProps = React.PropsWithChildren<{
    onPointerDown?: () => void;
}>;
/**
 * Renders the content inside a darkened page overlay blocking all
 * interactions with page behind
 *
 * **You probably want to use Modal or CategorizedModal instead.**
 *
 * **Warning: Do not try to use more, than one PageOverlay at a time.**
 *
 * @collboard-modules-sdk
 */
export declare function PageOverlay({ onPointerDown, children }: IPageOverlayProps): JSX.Element;
export {};
/**
 * TODO: @roseckyj 🎨 Prevent OR Warn if multiple PageOverlay instances from being rendered at the same time
 */
