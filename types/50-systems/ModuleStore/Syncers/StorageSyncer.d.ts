// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from '../../../40-utils/destroyables/IDestroyable';
import { string_module_name } from '../../../40-utils/typeAliases';
import { ISystemsExtended } from '../../00-SystemsContainer/ISystems';
import { IModulePersister } from '../interfaces/IModulePersister';
import { IModule } from '../interfaces/IModule';
import { IModulesStorage } from '../interfaces/IModulesStorage';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
interface IStorageSyncerOptions {
    activateDeclaredModules: boolean;
}
/**
 * StorageSyncer will install every module what is declared into the storage
 * When the module is redeclared, module is installed and uninstalled
 *
 * TODO: Maybe only installer because here we do not use any advantages of the syncer
 *
 * @private
 * @collboard-system
 */
export declare class StorageSyncer
    extends AbstractSyncer
    implements ISyncer, IModulePersister, IModulesStorage, IDestroyable {
    private readonly options;
    modulesStorage: IModulesStorage;
    constructor(systems: ISystemsExtended, options?: IStorageSyncerOptions);
    get modules(): import('rxjs').BehaviorSubject<Record<string, import('../interfaces/IModule').IModuleDefinition>>;
    declareModule(module: IModule): Promise<void>;
    moduleActivate(moduleName: string_module_name): Promise<void>;
    moduleDeactivate(moduleName: string_module_name): Promise<void>;
    destroy(): Promise<void>;
}
export {};
