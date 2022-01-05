// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_module_name } from '../../../40-utils/typeAliases';
import { ModuleInstallation } from '../ModuleInstallation';
import { IDependency } from './IDependencies';
import { IModuleStatusReporter } from './IModuleStatusReporter';
/**
 * Installer manages module installations, it takes care of number of running instances, manages reasons of module activation, syncing, etc.
 *
 * @collboard-modules-sdk
 */
export interface IInstaller extends IModuleStatusReporter {
    readonly installations: ModuleInstallation[];
    install(dependency: IDependency, syncerName?: string): Promise<void>;
    uninstall(moduleName: string_module_name): Promise<void>;
    uninstallAll(): Promise<void>;
}
