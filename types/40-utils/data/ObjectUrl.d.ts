// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable, Registration } from 'destroyable';
import { string_url } from '../typeAliases';
/**
 * Converts Blob, File or MediaSource to url using URL.createObjectURL
 *
 * @collboard-modules-sdk
 */
export declare class ObjectUrl extends Registration implements IDestroyable {
    readonly src: string_url;
    private constructor();
    /**
     * Creates ObjectUrl
     * DO NOT forget to call destroy() when you are done with it
     */
    static fromBlob(source: Blob | File | MediaSource): ObjectUrl;
    /**
     * Creates ObjectUrl:
     * 1) With functionality for Blobs, Files or MediaSources
     * 2) Just a wrapper for string urls
     *
     * DO NOT forget to call destroy() when you are done with it
     */
    static fromBlobOrUrl(source: Blob | File | MediaSource | string_url): ObjectUrl;
    /**
     * Gets object url as string
     * @alias src
     */
    get href(): string_url;
    /**
     * Gets object url as URL object
     */
    get url(): URL;
}
