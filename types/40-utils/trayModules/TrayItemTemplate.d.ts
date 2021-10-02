// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

/// <reference types="react" />
import { ITrayDefinition } from './TrayItemTypes';
interface ITrayItemTemplateProps {
    scale: number;
    id: string;
    setSelectedItemId: (newId: string | null) => void;
    trayDefinition: ITrayDefinition;
}
export declare function TrayItemTemplate(props: ITrayItemTemplateProps): JSX.Element;
export {};
