// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from 'everstorage';
import { BehaviorSubject } from 'rxjs';
import { string_module_name } from '../../../40-utils/typeAliases';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { ModuleInstallation } from '../ModuleInstallation';
import { ModuleStatus } from '../ModuleStatus';
import { IDependency } from './IDependencies';
/**
 * Installer manages module installations, it takes care of number of running instances, manages reasons of module activation, syncing, etc.
 */
export interface IInstaller extends IDestroyable {
    readonly installations: ModuleInstallation[];
    install(dependency: IDependency, systems: ISystems, syncerName?: string): Promise<void>;
    uninstall(moduleName: string_module_name): Promise<void>;
    uninstallAll(): Promise<void>;
    statusOf(moduleName: string_module_name): BehaviorSubject<ModuleStatus>;
}
