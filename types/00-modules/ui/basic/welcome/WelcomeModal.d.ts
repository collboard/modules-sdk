// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { IModalProps } from '../../../../30-components/modal/Modal';
import { ISystems } from '../../../../50-systems/00-SystemsContainer/ISystems';
interface IWelcomeModalProps extends IModalProps {
    /**
     * Reference to systems container
     */
    systems: ISystems;
}
export declare class WelcomeModal extends React.Component<IWelcomeModalProps> {
    render(): JSX.Element;
}
export {};
