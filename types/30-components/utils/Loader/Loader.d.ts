// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { ILoaderProps } from './ILoaderProps';
interface ILoaderBlockProps extends ILoaderProps {
    /**
     * Is the gray background around the loader
     */
    isWithBackground?: true;
}
/**
 * @collboard-modules-sdk
 */
export declare function Loader({ alt, canLoadForever, isWithBackground }: ILoaderBlockProps): JSX.Element;
export { };
/**
 * TODO: [☮️] Implement new loading /handwritten/ design
 * TODO: [🍳] Maybe rename Loader to LoaderBlock
 */
