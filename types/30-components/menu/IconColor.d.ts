// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { string_color } from '../../40-utils/typeAliases';
interface IIconColorProps {
    color: string_color;
    onClick?: () => void;
    className?: string;
    active?: boolean;
    inactive?: boolean;
}
/**
 * Color picker icon component
 *
 * *Note: If not rendered within a menu, there is no guarantee
 * of being rendered correctly*
 *
 * @collboard-modules-sdk
 */
export declare function IconColor({ className, color, active, inactive, onClick }: IIconColorProps): JSX.Element;
export { };
