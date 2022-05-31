// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Promisable } from 'type-fest';
import { Factorable } from '../../40-utils/IFactory';
import { ILoaderProps } from './Loader/Loader';
interface IAsyncContentComponentProps extends ILoaderProps {
    /**
     * Component to be rendered before the content is loaded
     * If not set, default <Loader/> is used
     */
    loader?: JSX.Element;
    /**
     * The async content to be rendered
     */
    content: Factorable<Promisable<JSX.Element | JSX.Element[]>>;
}
/**
 * Utility for mounting RxJS observable content
 *
 * @collboard-modules-sdk
 */
export declare function AsyncContentComponent({ loader, content, alt }: IAsyncContentComponentProps): JSX.Element;
export {};
