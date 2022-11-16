// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { string_url } from '../../../40-utils/typeAliases';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest/IModuleManifest';
import { IModulesStorageStrong } from '../interfaces/IModulesStorage';
interface IExternalModuleOptions {
    expectedManifest: IModuleManifest;
    cache: IModulesStorageStrong;
    script: Promisable<{
        src: string_url;
    }>;
}
/**
 *
 * @not-collboard-modules-sdk
 *
 * Warning: This is NOT A PURE function.
 *          It creates global `window.declareCallback` function SO use it only once per one cache.
 */
export declare function makeExternalModule({
    expectedManifest,
    cache,
    script,
}: IExternalModuleOptions): IModuleDefinition;
export {};
/**
 * TODO: Verify better that module has expected manifest
 * TODO: Add emoji before all `Warning:`
 */
