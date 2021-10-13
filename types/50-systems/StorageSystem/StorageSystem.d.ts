// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IStorage } from 'everstorage';
import { AbstractSystem } from '../AbstractSystem';
/**
 * StorageSystem provides storages for other systems / modules
 *
 * @private
 * @collboard-system
 */
export declare class StorageSystem extends AbstractSystem {
    protected init(): Promise<void>;
    private persistentStorage;
    private sessionStorage;
    getStorage<T extends any>(storageName: string, persistent?: boolean): IStorage<T>;
}
