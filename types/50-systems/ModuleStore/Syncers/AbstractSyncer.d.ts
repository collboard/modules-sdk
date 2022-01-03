// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { Promisable } from 'type-fest';
import { string_module_name } from '../../../40-utils/typeAliases';
import { AbstractSystem } from '../../AbstractSystem';
import { IDependenciesRecord, IDependency } from '../interfaces/IDependencies';
import { IModulesStorageWeak } from '../interfaces/IModulesStorage';
import { ISyncer } from '../interfaces/ISyncer';
/**
 * This class represents entity which synchonizes installs / uninstalls modules for some reason. For each reason there will be separate extended syncer from this abstract class.
 * Some syncers can run from begining, some re  connected with board route and be constructed for each board
 * Syncers are aviable in systems container and some of them can have methods to iteract with them for example to actovate some support
 */
export declare abstract class AbstractSyncer extends AbstractSystem implements ISyncer {
    protected modulesStorage: Promisable<IModulesStorageWeak>;
    private moduleInstaller;
    private throttleQueue;
    get statusOf(): (moduleName: string) => import('rxjs').BehaviorSubject<import('../ModuleStatus').ModuleStatus>;
    get installations(): import('../ModuleInstallation').ModuleInstallation[];
    install(dependency: IDependency, syncerName?: string): Promise<void>;
    uninstall(moduleName: string_module_name): Promise<void>;
    uninstallAll(): Promise<void>;
    protected init(): Promise<void>;
    protected initSyncer(): void | Promise<void>;
    private currentDependencies;
    /**
     * Promise that resolves when the first synchronization is done
     */
    get firstSynchronization(): Promise<void>;
    private doneSynchronizations;
    /**
     * TODO: !! Probbably do not use confusing shortcut sync but synchronize
     */
    sync(dependenciesTarget: IDependenciesRecord): Promise<void>;
    destroy(): Promise<void>;
}
