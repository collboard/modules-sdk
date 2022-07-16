// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ModuleInstallation } from '../ModuleInstallation';
import { IDependency } from './IDependencies';
import { IModuleStatusReporter } from './IModuleStatusReporter';
/**
 * Installer manages module installations, it takes care of number of running instances, manages reasons of module activation, syncing, etc.
 *
 * @collboard-modules-sdk
 */
export interface IInstaller extends IModuleStatusReporter {
    readonly installations: Array<ModuleInstallation>;
    install(dependency: IDependency, syncerName?: string): Promise<void>;
    uninstall(dependency: IDependency): Promise<void>;
    uninstallAll(): Promise<void>;
}
/**
 * TODO: Probably subinstaller (hyerarcical tree)
 */
