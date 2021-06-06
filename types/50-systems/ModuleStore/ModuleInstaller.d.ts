// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { BehaviorSubject } from 'rxjs';
import { Destroyable } from '../../40-utils/destroyables/Destroyable';
import { IDestroyable } from '../../40-utils/destroyables/IDestroyable';
import { string_module_name } from '../../40-utils/typeAliases';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { IDependency } from './interfaces/IDependencies';
import { IInstaller } from './interfaces/IInstaller';
import { IModulesStorage } from './interfaces/IModulesStorage';
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
    constructor(modulesStorage: IModulesStorage);
    install(dependency: IDependency, systems: ISystemsExtended, syncerName?: string): Promise<void>;
    private statuses;
    statusOf(moduleName: string_module_name): BehaviorSubject<ModuleStatus>;
    uninstall(moduleName: string_module_name): Promise<void>;
    uninstallAll(): Promise<void>;
    destroy(): Promise<void>;
}
