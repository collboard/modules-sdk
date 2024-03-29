// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Destroyable, IDestroyable } from 'destroyable';
import { BehaviorSubject } from 'rxjs';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { IDependency } from './interfaces/IDependencies';
import { IInstaller } from './interfaces/IInstaller';
import { IModuleManifest } from './interfaces/IModuleManifest/IModuleManifest';
import { IModulesStorageWeak } from './interfaces/IModulesStorage';
import { ModuleInstallation } from './ModuleInstallation';
import { ModuleStatus } from './ModuleStatus';
/**
 * Collboard app has one installer which manages all the module installations, takes care of number of running instances, manages reasons of module activation, syncing, etc.
 * Installer is used internally in syncers
 */
export declare class ModuleInstaller extends Destroyable implements IInstaller, IDestroyable {
    private readonly modulesStorage;
    private readonly systems;
    installations: Array<ModuleInstallation>;
    constructor(modulesStorage: IModulesStorageWeak, systems: ISystemsExtended);
    /**
     *
     * @param dependency to install
     * @param syncerName just for logging
     */
    install(dependency: IDependency, syncerName?: string): Promise<void>;
    private statuses;
    statusOf(moduleManifest: IModuleManifest): BehaviorSubject<ModuleStatus>;
    uninstall(dependency: IDependency): Promise<void>;
    uninstallAll(): Promise<void>;
    destroy(): Promise<void>;
}
/**
 * TODO: Refactor installer and when uninstall automatically remove item from installations
 * TODO: Convert to fully destroyable pattetn
 */
