// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IModulesStorageWeak } from '../../50-systems/ModuleStore/interfaces/IModulesStorage';
import { ModuleInstaller } from '../../50-systems/ModuleStore/ModuleInstaller';
import { string_module_name } from '../typeAliases';
import { NotFoundError } from './NotFoundError';
/**
 * @collboard-modules-sdk
 */
export declare class ModuleNotFoundError extends NotFoundError {
    constructor(options: {
        [key: string]: any;
        moduleName: string_module_name;
        moduleStorage: IModulesStorageWeak;
        modulenstaller: ModuleInstaller;
    });
}
