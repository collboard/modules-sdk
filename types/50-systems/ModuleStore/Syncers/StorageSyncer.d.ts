// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { string_module_name } from '../../../40-utils/typeAliases';
import { ISystemsExtended } from '../../00-SystemsContainer/ISystems';
import { IModule } from '../interfaces/IModule';
import { IModulePersister } from '../interfaces/IModulePersister';
import { IModulesStorageWithDeclare } from '../interfaces/IModulesStorage';
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
    implements ISyncer, IModulePersister, IModulesStorageWithDeclare, IDestroyable
{
    private readonly options;
    modulesStorage: IModulesStorageWithDeclare;
    constructor(systems: ISystemsExtended, options?: IStorageSyncerOptions);
    get modules(): import('rxjs').BehaviorSubject<Record<string, import('../interfaces/IModule').IModuleDefinition>>;
    declareModule(module: IModule): Promise<void>;
    moduleActivate(moduleName: string_module_name): Promise<void>;
    moduleDeactivate(moduleName: string_module_name): Promise<void>;
    destroy(): Promise<void>;
}
