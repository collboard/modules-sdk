// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { string_module_name } from '../../../40-utils/typeAliases';
import { ISystemsExtended } from '../../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../../AbstractSystem';
import { IDependenciesRecord, IDependency } from '../interfaces/IDependencies';
import { IModulesStorage } from '../interfaces/IModulesStorage';
import { ISyncer } from '../interfaces/ISyncer';
/**
 * This class represents entity which synchonizes install/uninstall modules for some reason. For each reason there will be separate extended syncer from this abstract class.
 * Some syncers can run from begining, some re  connected with board route and be constructed for each board
 * Syncers are aviable in systems container and some of them can have methods to iteract with them for example to actovate some support
 */
export declare abstract class AbstractSyncer extends AbstractSystem implements ISyncer {
    abstract modulesStorage: IModulesStorage;
    private moduleInstaller;
    private queue;
    get statusOf(): any;
    get installations(): import('../ModuleInstallation').ModuleInstallation[];
    install(dependency: IDependency, systems: ISystemsExtended, syncerName?: string): Promise<void>;
    uninstall(moduleName: string_module_name): Promise<void>;
    uninstallAll(): Promise<void>;
    protected init(): Promise<void>;
    protected initSyncer(): void | Promise<void>;
    private currentDependencies;
    sync(dependenciesTarget: IDependenciesRecord): Promise<void>;
    destroy(): Promise<void>;
}
