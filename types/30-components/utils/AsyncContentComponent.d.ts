// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Promisable } from 'type-fest';
import { Factorable } from '../../40-utils/IFactory';
import { ILoaderProps } from './Loader/ILoaderProps';
interface IAsyncContentComponentProps extends ILoaderProps {
    /**
     * Component to be rendered before the content is loaded
     * If not set, default <Loader/> is used
     */
    loader?: JSX.Element;
    /**
     * The async content to be rendered
     */
    content: Factorable<Promisable<JSX.Element | Array<JSX.Element>>>;
}
/**
 * Utility for mounting RxJS observable content
 *
 * @deprecated [📠] Use usePromise/useLoadable hook instead
 * @collboard-modules-sdk
 */
export declare function AsyncContentComponent({ loader, content, alt }: IAsyncContentComponentProps): JSX.Element;
export {};
/**
* TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
* TODO: [🧵] Move to external LIB for react loadables

TODO: [1] Better mechanism for slowing down components
let slowAsyncContentComponentMiliseconds = 0;
(window as any).slowAsyncContentComponent = (miliseonds: number) => {
slowAsyncContentComponentMiliseconds = miliseonds;
};
*/
