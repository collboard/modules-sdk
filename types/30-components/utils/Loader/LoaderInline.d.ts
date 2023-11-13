// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ReactNode } from 'react';
import { Arrayable } from '../../../40-utils/typeHelpers';
import { string_animation } from '../../menu/animations';
import { string_icon } from '../../menu/icons';
import { ILoaderProps } from './ILoaderProps';
interface ILoaderInlineProps extends ILoaderProps {
    /**
     * Icon to be shown
     */
    icon?: string_icon;
    /**
     * Animation or array of animations to be played
     *
     * Note: That some animations overrides the icon
     *
     *
     */
    animation?: Arrayable<string_animation>;
    /**
     * Content after the loading icon
     */
    children?: ReactNode;
}
/**
 * @collboard-modules-sdk
 */
export declare function LoaderInline({
    children,
    icon,
    animation,
    alt,
    canLoadForever,
}: ILoaderInlineProps): JSX.Element;
export {};
/**
 * TODO: [☮️] Implement new loading /handwritten/ design
 */
