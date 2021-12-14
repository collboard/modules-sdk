// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { string_javascript_name, string_url } from '../../../40-utils/typeAliases';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
import { IModulesStorageStrong } from '../interfaces/IModulesStorage';
interface IExternalModuleOptions extends IExternalModuleManifest {
    expectedManifest: IModuleManifest;
    /**
     * It is strongly recommended to provide cache
     */
    cache?: IModulesStorageStrong;
}
/**
 *
 * @not-collboard-modules-sdk
 */
export declare function makeExternalModule({
    expectedManifest,
    cache,
    script: { src, declareCallback },
}: IExternalModuleOptions): IModuleDefinition;
/**
 *
 * @collboard-modules-sdk
 */
export interface IExternalModuleManifest {
    script: {
        src: string_url;
        declareCallback: string_javascript_name;
    };
}
export {};
/**
 * TODO: !!! External modules should be loaded after the internal ones
 * TODO: !!! Order of extra JSX UI additions should be agnostic to order of its carry modules installation/uninstallation
 * TODO: !!! Bundele can contain multiple modules.
 * TODO: !!! Verify that module has expected manifest
 * TODO: !!! Timeout
 * TODO: !!! Hande errors
 */
