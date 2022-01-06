// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { IFile, IIFilesStorageWithCdn } from '../interfaces/IFilesStorage';
interface IDigitalOceanSpacesConfig {
    bucket: string;
    endpoint: string;
    accessKeyId: string;
    secretAccessKey: string;
    cdn: URL;
    gzip: boolean;
}
export declare class DigitalOceanSpaces implements IIFilesStorageWithCdn {
    private readonly config;
    get cdn(): URL;
    private s3;
    constructor(config: IDigitalOceanSpacesConfig);
    getItem(key: string): Promise<IFile | null>;
    removeItem(key: string): Promise<void>;
    setItem(key: string, file: IFile): Promise<void>;
    subscribe({
        match,
        replay,
        observer,
    }: {
        match?: RegExp;
        replay?: boolean;
        observer(key: string, value: IFile): void;
    }): IDestroyable;
    private observers;
    private notifyObservers;
}
export {};
/**
 * TODO: Extend this from AWS S3 (compatible) storage
 * TODO: Maybe not extend from storage
 * TODO: Read-only mode
 * TODO: Immutable mode
 */
