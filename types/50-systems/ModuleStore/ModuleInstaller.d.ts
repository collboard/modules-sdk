// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { Destroyable, IDestroyable } from 'destroyable';
import { BehaviorSubject } from 'rxjs';
import { string_module_name } from '../../40-utils/typeAliases';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { IDependency } from './interfaces/IDependencies';
import { IInstaller } from './interfaces/IInstaller';
import { IModulesStorageWithDeclare } from './interfaces/IModulesStorage';
import { ModuleInstallation } from './ModuleInstallation';
import { ModuleStatus } from './ModuleStatus';
/**
 * Collboard app has one installer which manages all the module installations, takes care of number of running instances, manages reasons of module activation, syncing, etc.
 *
 * TODO: Refactor installer and when uninstall automatically remove item from installations
 * TODO: Convert to fully destroyable pattetn
 */
export declare class ModuleInstaller extends Destroyable implements IDestroyable, IInstaller {
    private modulesStorage;
    readonly installations: ModuleInstallation[];
    constructor(modulesStorage: IModulesStorageWithDeclare);
    install(dependency: IDependency, systems: ISystemsExtended, syncerName?: string): Promise<void>;
    private statuses;
    statusOf(moduleName: string_module_name): BehaviorSubject<ModuleStatus>;
    uninstall(moduleName: string_module_name): Promise<void>;
    uninstallAll(): Promise<void>;
    destroy(): Promise<void>;
}
