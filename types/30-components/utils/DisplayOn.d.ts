// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
interface IDisplayOnProps {
    desktop?: true;
    tablet?: true;
    mobile?: true;
    children: React.ReactNode;
}
/**
 * Choose on which devices (according to display size) to show certain component
 *
 * @collboard-modules-sdk
 */
export declare function DisplayOn({ desktop, tablet, mobile, children }: IDisplayOnProps): JSX.Element;
export { };
/**
 * TODO: [🍕] Unite sizes for display each device to one place
 */
