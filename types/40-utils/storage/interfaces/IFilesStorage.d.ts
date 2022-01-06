// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="node" />
import { IDestroyable } from 'destroyable';
import { IStorage } from 'everstorage';
import { string_mime_type } from '../../typeAliases';
export interface IFile {
    type: string_mime_type;
    buffer: Buffer;
}
/**
 * Represents storage that will store each keypair in a separate file.
 */
export interface IFilesStorage extends Omit<IStorage<IFile>, 'length' | 'clear' | 'key'> {
    subscribe(options: { match?: RegExp; replay?: boolean; observer(key: string, value: IFile): void }): IDestroyable;
}
/**
 * Represents storage that can give public deterministic  URL for each file
 */
export interface IIFilesStorageWithCdn extends IFilesStorage {
    cdn: URL;
}
/**
 * TODO: Maybe not deterministic and async getItemUrl
 * TODO: Maybe just createUrlMaker
 * TODO: list method
 * TODO: glob method
 * TODO: subfolder (simmilar to PrefixStorage) method
 * TODO: subscribe, list, sub(folder) should be par5t of everstorage library
 * TODO: Maybe implement observe through RxJS
 */
