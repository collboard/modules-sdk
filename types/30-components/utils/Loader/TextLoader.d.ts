// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { number_miliseconds, string_char } from '../../../40-utils/typeAliases';
export interface ITextLoaderProps {
    chars: string_char[];
    speed: number_miliseconds;
}
/**
 * @collboard-modules-sdk
 */
export declare function TextLoader({ chars, speed }: ITextLoaderProps): JSX.Element;
