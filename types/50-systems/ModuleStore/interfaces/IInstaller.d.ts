// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from 'destroyable';
import { BehaviorSubject } from 'rxjs';
import { string_module_name } from '../../../40-utils/typeAliases';
import { ISystemsExtended } from '../../00-SystemsContainer/ISystems';
import { ModuleInstallation } from '../ModuleInstallation';
import { ModuleStatus } from '../ModuleStatus';
import { IDependency } from './IDependencies';
/**
 * Installer manages module installations, it takes care of number of running instances, manages reasons of module activation, syncing, etc.
 *
 * @collboard-modules-sdk
 */
export interface IInstaller extends IDestroyable {
    readonly installations: ModuleInstallation[];
    install(dependency: IDependency, systems: ISystemsExtended, syncerName?: string): Promise<void>;
    uninstall(moduleName: string_module_name): Promise<void>;
    uninstallAll(): Promise<void>;
    statusOf(moduleName: string_module_name): BehaviorSubject<ModuleStatus>;
}
