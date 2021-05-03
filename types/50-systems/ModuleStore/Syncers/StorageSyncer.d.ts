
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IDestroyable } from '../../../40-utils/destroyables/IDestroyable';
import { IModule } from '../interfaces/IModule';
import { IModulesStorage } from '../interfaces/IModulesStorage';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * StorageSyncer will install every module what is declared into the storage
 * When the module is redeclared, module is installed and uninstalled
 *
 * TODO: Maybe only installer because here we do not use any advantages of the syncer
 */
export declare class StorageSyncer extends AbstractSyncer implements ISyncer, IModulesStorage, IDestroyable {
    modulesStorage: IModulesStorage;
    get modules(): Record<string, import("../interfaces/IModule").IModuleDefinition>;
    declareModule(module: IModule): Promise<void>;
    destroy(): Promise<void>;
}

                  