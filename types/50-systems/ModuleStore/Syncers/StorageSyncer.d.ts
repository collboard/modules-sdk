// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { Observable } from 'rxjs';
import { string_module_name } from '../../../40-utils/typeAliases';
import { ISystemsExtended } from '../../00-SystemsContainer/ISystems';
import { IModule, IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
import { IModulePersister } from '../interfaces/IModulePersister';
import { IModulesStorageStrong } from '../interfaces/IModulesStorage';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
export interface IStorageSyncerOptions {
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
export declare abstract class StorageSyncer
    extends AbstractSyncer
    implements ISyncer, IModulePersister, IModulesStorageStrong, IDestroyable
{
    private readonly options;
    protected readonly modulesStorage: IModulesStorageStrong;
    constructor(systems: ISystemsExtended, options?: IStorageSyncerOptions);
    /**
     * @proxy
     */
    getModule(name: string_module_name): IModuleDefinition | null;
    /**
     * @proxy
     */
    getAllModules(): IModuleDefinition[];
    /**
     * @proxy
     */
    observeAllModules(): Observable<IModuleDefinition[]>;
    declareModule(module: IModule): Promise<void>;
    moduleActivate(moduleManifest: IModuleManifest): Promise<void>;
    moduleDeactivate(moduleManifest: IModuleManifest): Promise<void>;
    destroy(): Promise<void>;
}
